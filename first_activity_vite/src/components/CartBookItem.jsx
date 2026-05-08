import { Trash2, Minus, Plus, ShoppingBag } from "lucide-react";
import { useState } from "react";
import QuantityCounter from "./QuantityCounter";

export default function CartBookItem({
  title = "Título del libro",
  author = "Autor desconocido",
  price = 30,
  quantity,
  image = "/prueba3.jpg",
  onIncrease,
  onDecrease,
  onRemove,
  maxStock = 10,
  type,
}) {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const subtotal = price * quantity;

  if (type == "slide") {
    return (
      <div className="bg-white rounded-xl p-4 sm:p-6 border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-200">
        <div className="group flex flex-col sm:flex-row gap-4 sm:gap-6">
          <div className="flex-1 flex flex-col sm:flex-row gap-4">
            {/* Detalles del libro */}
            <div className="flex-1 space-y-2">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 line-clamp-2 hover:text-blue-600 transition-colors">
                {title}
              </h3>
            </div>
            <div className="text-right min-w-[100px]">
              <p className="text-sm text-gray-500 hidden sm:block">Subtotal</p>
              <p className="text-lg sm:text-xl font-bold text-gray-900">
                $ {subtotal.toFixed(2)}
              </p>
              <p className="text-xs text-gray-400 hidden sm:block">
                $ {price.toFixed(2)} c/u
              </p>
            </div>

            {/* Botón eliminar */}
            <button
              onClick={onRemove}
              className="p-2 rounded-full text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all duration-200"
              aria-label="Eliminar producto"
            >
              <Trash2 size={18} />
            </button>
          </div>
        </div>
        <QuantityCounter
          quantity={quantity}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
        ></QuantityCounter>
      </div>
    );
  } else {
    return (
      <div className="group flex flex-col sm:flex-row gap-4 sm:gap-6 bg-white rounded-xl p-4 sm:p-6 border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-200">
        {/* Imagen */}
        <div className="relative w-full sm:w-28 h-48 sm:h-36 flex-shrink-0 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg overflow-hidden">
          {!imageError ? (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              onError={handleImageError}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <ShoppingBag className="w-8 h-8 text-gray-300" />
            </div>
          )}
        </div>

        {/* Info principal */}
        <div className="flex-1 flex flex-col sm:flex-row gap-4">
          {/* Detalles del libro */}
          <div className="flex-1 space-y-2">
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 line-clamp-2 hover:text-blue-600 transition-colors">
              {title}
            </h3>

            <p className="text-sm text-gray-500">{author}</p>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700">
                Disponible
              </span>
              {quantity >= maxStock - 2 && (
                <span className="text-xs text-orange-600">
                  ¡Últimas unidades!
                </span>
              )}
            </div>
          </div>

          {/* Precio unitario (mobile) */}
          <div className="sm:hidden flex justify-between items-center">
            <span className="text-sm text-gray-500">Precio unitario:</span>
            <span className="text-lg font-semibold text-gray-900">
              S/ {price.toFixed(2)}
            </span>
          </div>

          {/* Controles de cantidad y precio */}
          <div className="flex items-center justify-between sm:justify-end gap-6 sm:gap-8">
            {/* Cantidad */}
            <QuantityCounter
              quantity={quantity}
              onIncrease={onIncrease}
              onDecrease={onDecrease}
            ></QuantityCounter>

            {/* Precio subtotal */}
            <div className="text-right min-w-[100px]">
              <p className="text-sm text-gray-500 hidden sm:block">Subtotal</p>
              <p className="text-lg sm:text-xl font-bold text-gray-900">
                $ {subtotal.toFixed(2)}
              </p>
              <p className="text-xs text-gray-400 hidden sm:block">
                $ {price.toFixed(2)} c/u
              </p>
            </div>

            {/* Botón eliminar */}
            <button
              onClick={onRemove}
              className="p-2 rounded-full text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all duration-200"
              aria-label="Eliminar producto"
            >
              <Trash2 size={18} />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
