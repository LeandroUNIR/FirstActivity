import AppRouter from "./router/AppRouter";
import { CartProvider } from "./context/cart/CartProvider";

function App() {
  return (
    <CartProvider>
      <AppRouter />
    </CartProvider>
  );
}

export default App;
