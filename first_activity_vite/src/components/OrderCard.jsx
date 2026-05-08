const OrderCard = ({ order }) => {
  const date = new Date(order.createdAt).toLocaleDateString("es-CO", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const total = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  }).format(order.total ?? 0);

  return (
    <article className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-600">Pedido</p>
          <h3 className="mt-2 text-xl font-semibold text-slate-900">#{order.id}</h3>
        </div>
        <div className="text-sm text-slate-500 text-right">
          <p>{date}</p>
          <p className="mt-1 text-lg font-semibold text-slate-900">{total}</p>
        </div>
      </div>

      <div className="mt-6 rounded-3xl bg-slate-50 p-4">
        <p className="text-sm font-medium text-slate-700">Productos</p>
        {order.items?.length ? (
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            {order.items.slice(0, 3).map((item, index) => (
              <li key={index} className="flex items-center justify-between gap-3">
                <span>{item.title ?? item.name ?? `Producto ${index + 1}`}</span>
                <span className="font-semibold">x{item.quantity ?? 1}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-3 text-sm text-slate-500">Sin artículos en este pedido.</p>
        )}
        {order.items?.length > 3 && (
          <p className="mt-3 text-xs text-slate-500">+{order.items.length - 3} producto(s) más</p>
        )}
      </div>
    </article>
  );
};

export default OrderCard;
