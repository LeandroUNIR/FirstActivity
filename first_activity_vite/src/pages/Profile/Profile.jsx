import { useMemo } from "react";
import { useOrders } from "../../hooks/useOrders";
import OrderCard from "../../components/OrderCard";

const Profile = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const { orders } = useOrders();

    const recentOrders = useMemo(() => orders.slice(0, 5), [orders]);
    const totalOrders = orders.length;
    const showingOrders = Math.min(5, totalOrders);

    const displayName = user?.email
        ? `${user.email.split("@")[0][0].toUpperCase()}${user.email.split("@")[0].slice(1)}`
        : "Usuario";

    return (
        <div className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl space-y-6">
                <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-600">Mi cuenta</p>
                            <h1 className="mt-2 text-3xl font-semibold text-slate-900">Perfil de {displayName}</h1>
                        </div>
                    </div>

                    <div className="mt-8 grid gap-4 sm:grid-cols-2">
                        <div className="rounded-3xl bg-slate-50 p-6">
                            <p className="text-sm text-slate-500">Correo electrónico</p>
                            <p className="mt-2 text-lg font-medium text-slate-900">{user?.email ?? "No has iniciado sesión"}</p>
                        </div>
                        <div className="rounded-3xl bg-slate-50 p-6">
                            <p className="text-sm text-slate-500">Información de usuario</p>
                            <p className="mt-2 text-lg font-medium text-slate-900">{displayName}</p>
                        </div>
                    </div>
                </section>

                <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Historial</p>
                            <h2 className="mt-2 text-2xl font-semibold text-slate-900">Últimos pedidos</h2>
                        </div>
                        <div>
                            <p className="text-sm text-slate-500">Mostrando los {showingOrders} de {totalOrders} pedidos</p>
                        </div>
                    </div>

                    {recentOrders.length === 0 ? (
                        <div className="mt-8 rounded-3xl border border-dashed border-slate-200 bg-slate-50 p-8 text-center text-slate-600">
                            Aún no has realizado pedidos. Cuando completes una compra, aparecerán aquí tus últimos pedidos.
                        </div>
                    ) : (
                        <div className="mt-8 grid gap-4">
                            {recentOrders.map((order) => (
                                <OrderCard key={order.id} order={order} />
                            ))}
                        </div>
                    )}
                </section>
            </div>
        </div>
    );
};

export default Profile;