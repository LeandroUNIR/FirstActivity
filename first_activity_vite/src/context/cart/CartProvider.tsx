import React, { createContext, useContext, useEffect, useState } from "react";

//Tipos

export type CartItem = {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
};

type Discount = {
  type: "percentage" | "fixed";
  value: number;
  code?: string;
};

type CartContextType = {
  cart: CartItem[];
  discount: Discount | null;
  subtotal: number;
  total: number;
  totalQuantity: number;

  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  updateQty: (id: number, qty: number) => void;
  clearCart: () => void;

  applyDiscount: (code: string) => boolean;
  removeDiscount: () => void;
};



// Contexto

const CartContext = createContext<CartContextType>({} as CartContextType);

// Provider

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [discount, setDiscount] = useState<Discount | null>(null);
  const [initialized, setInitialized] = useState(false);

  // Cargar desde localStorage

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    const storedDiscount = localStorage.getItem("discount");

    if (storedCart) setCart(JSON.parse(storedCart));
    if (storedDiscount) setDiscount(JSON.parse(storedDiscount));

    setInitialized(true);
  }, []);

  // Guardar en localStorage

  useEffect(() => {
    if (!initialized) return;
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart, initialized]);

  useEffect(() => {
    if (!initialized) return;
    localStorage.setItem("discount", JSON.stringify(discount));
  }, [discount, initialized]);

  // Cálculos

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  let discountAmount = 0;

  if (discount) {
    if (discount.type === "percentage") {
      // puedes limitar máximo descuento aquí si quieres
      discountAmount = subtotal * (discount.value / 100);
    } else {
      discountAmount = discount.value;
    }
  }

  const total = Math.max(subtotal - discountAmount, 0);

  const totalQuantity = cart.reduce(
  (acc, item) => acc + item.quantity,
  0
);

  // Acciones

  const addToCart = (item: CartItem) => {
    setCart(prev => {
      const exist = prev.find(p => p.id === item.id);

      if (exist) {
        return prev.map(p =>
          p.id === item.id
            ? { ...p, quantity: p.quantity + 1 }
            : p
        );
      }

      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(p => p.id !== id));
  };

  const updateQty = (id: number, qty: number) => {
    if (qty <= 0) return;

    setCart(prev =>
      prev.map(p =>
        p.id === id ? { ...p, quantity: qty } : p
      )
    );
  };

  const clearCart = () => {
    setCart([]);
    setDiscount(null);
  };

  // Cupones simulados

  const applyDiscount = (code: string): boolean => {
    const coupons: Record<string, Discount> = {
      LIBROS10: { type: "percentage", value: 10 },
      DESCUENTO20: { type: "fixed", value: 20 },
      SUPER15: { type: "percentage", value: 15 }
    };

    const found = coupons[code.toUpperCase()];

    if (!found) return false;

    setDiscount({ ...found, code });
    return true;
  };

  const removeDiscount = () => {
    setDiscount(null);
  };

  // Provider
  
  return (
    <CartContext.Provider
      value={{
        cart,
        discount,
        subtotal,
        total,
        totalQuantity,
        addToCart,
        removeFromCart,
        updateQty,
        clearCart,
        applyDiscount,
        removeDiscount
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Hook personalizado

export const useCart = () => useContext(CartContext);