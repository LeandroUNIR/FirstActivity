import { useNavigate } from "react-router-dom";

const Checkout = () => {
    const navigate = useNavigate();

    const handleCheckout = () => {
        window.alert("Pedido realizado correctamente");

        localStorage.removeItem("cart"); // simulado mientras integran

        navigate("/");
    };

    return (
        <div>
            <h2>Checkout</h2>
            <button onClick={handleCheckout}>Pagar</button>
        </div>
    );
};

export default Checkout;