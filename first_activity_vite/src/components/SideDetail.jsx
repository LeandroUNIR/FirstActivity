import React from "react";
import { useCart } from "../context/cart/CartProvider";
import CartBookItem from "../components/CartBookItem";
import { useNavigate } from "react-router-dom";

export default function SideDetail() {
  const { cart, total, updateQty, removeFromCart } = useCart();
  const navigate = useNavigate();

  return (
    <div className="fixed top-20 right-0 h-[80%] w-full sm:w-96 flex flex-col bg-white border hidden sm:flex">
      {/* HEADER */}
      <div className="p-4 border-b flex items-center justify-between">
        <h2 className="font-semibold text-lg">Tu carrito</h2>
      </div>

      {/* CONTENIDO (scroll) */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {cart.map((item) => (
          <CartBookItem
            key={item.id}
            title={item.title}
            author={item.author}
            price={item.price}
            quantity={item.quantity}
            type="slide"
            onIncrease={() => updateQty(item.id, item.quantity + 1)}
            onDecrease={() => updateQty(item.id, item.quantity - 1)}
            onRemove={() => removeFromCart(item.id)}
          />
        ))}
      </div>

      {/* FOOTER */}
      <div className="p-4 border-t space-y-3">
        <div className="flex justify-between font-semibold">
          <span>Total</span>
          <span>{"$" + total}</span>
        </div>

        <button
          onClick={() => navigate("/cart")}
          className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
        >
          Ir a la Cesta
        </button>
      </div>
    </div>
  );
}
