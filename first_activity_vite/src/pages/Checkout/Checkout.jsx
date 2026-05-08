import { useNavigate } from "react-router-dom";
import OrderSummary from "../../components/OrderSummary";
import { useCart } from "../../context/cart/CartProvider";
import Input from "../../components/Input";
import { User } from "lucide-react";
import { useOrders } from "../../hooks/useOrders";

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const { addOrder } = useOrders();

  const navigate = useNavigate();

  const buildOrder = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    const items = cart.map((item) => ({
      id: item.id,
      title: item.title,
      price: item.price,
      quantity: item.quantity,
    }));

    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return {
      id: Date.now(),
      createdAt: new Date().toISOString(),
      userEmail: user?.email ?? "",
      items,
      total,
      status: "Completado",
    };
  };

  const handleCheckout = () => {
    if (cart.length > 0) {
      addOrder(buildOrder());
    }

    window.alert("Pedido realizado correctamente");
    localStorage.removeItem("cart"); // simulado mientras integran
    clearCart();
    navigate("/");
  };

  return (
    <div className="p-5 grid grid-cols-1 sm:grid-cols-2 bg-gray-100 gap-4">
      <div>
        <p className="mb-2 text-xl font-semibold">Formulario de pago</p>

        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
          <div className="flex">
            <User className="w-5 mr-1"></User>
            <p className="mb-4 font-semibold">Datos de usuario</p>
          </div>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2.5 text-sm font-medium text-heading"
              >
                Nombres
              </label>
              <Input type="text" id="first_name" placeholder="" maxLength={20}  />
            </div>
            <div>
              <label
                htmlFor="last_name"
                className="block mb-2.5 text-sm font-medium text-heading"
              >
                Apellidos
              </label>
              <Input type="text" id="last_name" placeholder="" maxLength={20} />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block mb-2.5 text-sm font-medium text-heading"
              >
                Número de teléfono
              </label>
              <Input
                type="tel"
                id="phone"
                placeholder="123-45-678"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                maxLength={10}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2.5 text-sm font-medium text-heading"
              >
                Correo electrónico
              </label>
              <Input type="email" id="email" placeholder="correo@ejemplo.com" maxLength={30} />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2.5 text-sm font-medium text-heading"
              >
                Dirección de envío
              </label>
              <Input type="text" id="email" placeholder="Av. Los sauces #756" maxLength={25} />
            </div>
          </div>
        </div>
      </div>
      <div>
        <OrderSummary onCheckout={handleCheckout} />
      </div>
    </div>
  );
};

export default Checkout;
