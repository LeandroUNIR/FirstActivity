import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { NavLink } from "react-router-dom";

import { useCart } from "../context/cart/CartProvider";

import {
  Tag,
  Ticket,
  ChevronRight,
  AlertCircle,
  CheckCircle,
} from "lucide-react";

export default function OrderSummary({ onCheckout, type }) {
  const [couponCode, setCouponCode] = useState("");
  const [couponStatus, setCouponStatus] = useState({ type: "", message: "" });

  const { cart, subtotal, total, discount, applyDiscount, removeDiscount } =
    useCart();

  // Calcular monto descontado
  const discountAmount = discount
    ? discount.type === "percentage"
      ? subtotal * (discount.value / 100)
      : discount.value
    : 0;

  const handleApplyCoupon = () => {
    if (!couponCode.trim()) {
      setCouponStatus({
        type: "error",
        message: "Por favor ingresa un cupón",
      });
      return;
    }

    const ok = applyDiscount(couponCode);

    if (ok) {
      setCouponStatus({
        type: "success",
        message: "¡Cupón aplicado correctamente!",
      });
    } else {
      setCouponStatus({
        type: "error",
        message: "Cupón inválido",
      });
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden sticky top-6">
      {/* Header */}
      <div className="bg-black px-6 py-2">
        <h3 className="text-white text-lg font-semibold flex items-center gap-2">
          <Ticket className="w-5 h-5" />
          Resumen de la orden
        </h3>
      </div>

      <div className="p-6 space-y-6">
        {/* CUPONES */}
        <div className="space-y-3">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
            <Tag className="w-4 h-4" />
            ¿Tienes un cupón?
          </label>

          <div className="flex gap-2">
            <div className="flex-1 relative">
              <input
                type="text"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none text-sm"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                placeholder="Ej: LIBROS10"
                onKeyDown={(e) => e.key === "Enter" && handleApplyCoupon()}
              />

              {couponStatus.message && (
                <div
                  className={`absolute mt-1 text-xs flex items-center gap-1 ${
                    couponStatus.type === "success"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {couponStatus.type === "success" ? (
                    <CheckCircle className="w-3 h-3" />
                  ) : (
                    <AlertCircle className="w-3 h-3" />
                  )}
                  <span>{couponStatus.message}</span>
                </div>
              )}
            </div>

            <button
              onClick={handleApplyCoupon}
              disabled={!couponCode.trim()}
              className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all font-medium text-sm flex items-center gap-2"
            >
              Aplicar
            </button>
          </div>

          {/* Si hay descuento activo */}
          {discount && (
            <div className="flex justify-between items-center text-sm text-green-600">
              <span>
                Cupón aplicado: <b>{discount.code}</b>
              </span>
              <button onClick={removeDiscount} className="text-red-500 text-xs">
                Quitar
              </button>
            </div>
          )}
        </div>

        {/* DETALLE */}
        <div className="space-y-3 pt-2">
          <div className="space-y-2 text-sm">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between text-gray-600">
                <span>
                  {item.title} ({item.quantity})
                </span>
                <span>$ {(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}

            <div className="flex justify-between font-semibold">
              <span>Subtotal</span>
              <span>$ {subtotal.toFixed(2)}</span>
            </div>

            {discount && (
              <div className="flex justify-between text-green-600">
                <span>Descuento</span>
                <span>- $ {discountAmount.toFixed(2)}</span>
              </div>
            )}
          </div>

          <div className="border-t my-4"></div>

          {/* TOTAL */}
          <div className="flex justify-between items-baseline">
            <h2 className="text-lg font-semibold">Total</h2>
            <div className="text-right">
              <span className="text-2xl font-bold">$ {total.toFixed(2)}</span>

              {discount && (
                <p className="text-xs text-green-600">
                  Ahorraste $ {discountAmount.toFixed(2)}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* CHECKOUT */}
        {type == "cart" ? (
          <NavLink to="/checkout">
            <button
              disabled={cart.length == 0}
              className="w-full bg-sky-600 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 disabled:bg-sky-300 disabled:cursor-not-allowed"
            >
              Continuar con la compra
              <ChevronRight className="w-4 h-4" />
            </button>
          </NavLink>
        ) : (
          <button
            disabled={cart.length == 0}
            onClick={onCheckout}
            className="w-full bg-sky-600 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 disabled:bg-sky-300 disabled:cursor-not-allowed"
          >
            Pagar
          </button>
        )}
      </div>
    </div>
  );
}
