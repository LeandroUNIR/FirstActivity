import React from "react";
import { Minus, Plus } from "lucide-react";

export default function QuantityCounter({
  quantity,
  onIncrease,
  onDecrease,
  maxStock
}) {
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={onDecrease}
        disabled={quantity <= 1}
        className="p-1.5 rounded-full border border-gray-200 hover:border-gray-300 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
        aria-label="Disminuir cantidad"
      >
        <Minus size={16} className="text-gray-600" />
      </button>

      <span className="w-10 text-center font-medium text-gray-800">
        {quantity}
      </span>

      <button
        onClick={onIncrease}
        disabled={quantity >= maxStock}
        className="p-1.5 rounded-full border border-gray-200 hover:border-gray-300 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
        aria-label="Aumentar cantidad"
      >
        <Plus size={16} className="text-gray-600" />
      </button>
    </div>
  );
}
