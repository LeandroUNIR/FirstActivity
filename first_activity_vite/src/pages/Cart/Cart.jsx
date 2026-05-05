import React from "react";
import { useCart } from "../../context/cart/CartProvider";
import CartBookItem from "../../components/CartBookItem";
import OrderSummary from "../../components/OrderSummary";

export default function Checkout() {
  const { cart, updateQty, removeFromCart } = useCart();

  return (
    <div className="p-5 grid grid-cols-1 sm:grid-cols-2 bg-gray-100 gap-4">
      {/* LISTA DE PRODUCTOS */}
      <div className="p-1 space-y-3">
        {cart.length === 0 ? (
          <div className="bg-white p-4 rounded-xl text-center text-gray-500">
            Carrito vacío
          </div>
        ) : (
          cart.map((item) => (
            <CartBookItem
              key={item.id}
              title={item.title}
              author={item.author}
              price={item.price}
              quantity={item.quantity}
              image={item.image}
              onIncrease={() => updateQty(item.id, item.quantity + 1)}
              onDecrease={() => updateQty(item.id, item.quantity - 1)}
              onRemove={() => removeFromCart(item.id)}
            />
          ))
        )}
      </div>

      {/* RESUMEN */}
      <div className="p-1">
        <OrderSummary type="cart" />
      </div>
    </div>
  );
}
