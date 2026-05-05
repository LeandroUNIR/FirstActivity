import { useContext } from "react";
import { GlobalContext } from "../../context/AuthContext/global/GlobalContext";
import Books from "../../data/books.json";
import Button from "../../components/button";
import SideDetail from "../../components/SideDetail";

import { useCart } from "../../context/cart/CartProvider";

const BookDetail = () => {
  const { bookId } = useContext(GlobalContext);
  const { addToCart, cart } = useCart();

  const bookDetail = Books.find((book) => book.id === bookId);

  if (!bookDetail) return <p>Libro no encontrado</p>;

  const bookCast = {
    id: bookDetail.id,
    title: bookDetail.titulo,
    price: bookDetail.costo_cop,
    author: bookDetail.autor,
  };

  return (
      <>
        {/* Wrapper dinámico */}
        <div
            className={`w-full pt-20 flex ${
                cart.length > 0 ? "justify-start" : "justify-center"
            }`}
        >
          <div className="grid grid-cols-[1fr_2fr] gap-6 items-start w-[900px]">

            {/* 📚 Imagen + botón */}
            <div className="flex flex-col items-center gap-6">
              <img
                  className="object-cover w-full max-h-[420px] rounded-xl shadow"
                  src="/prueba3.jpg"
                  alt={bookDetail.titulo}
              />

              <Button
                  color="green"
                  type="button"
                  onClick={() => addToCart(bookCast)}
                  className="w-full"
              >
                Agregar al carrito
              </Button>
            </div>

            {/* Detalles */}
            <div className="px-6">
              <h2 className="text-4xl font-bold pb-2">Título del libro</h2>
              <p className="text-lg pb-4">{bookDetail.titulo}</p>

              <h2 className="text-4xl font-bold pb-2">Autor</h2>
              <p className="text-lg pb-4">{bookDetail.autor}</p>

              <h2 className="text-4xl font-bold pb-2">Precio</h2>
              <p className="text-lg pb-4">
                {new Intl.NumberFormat("es-CO", {
                  style: "currency",
                  currency: "COP",
                  minimumFractionDigits: 0,
                }).format(bookDetail.costo_cop)}
              </p>

              <h2 className="text-4xl font-bold pb-2">Descripción</h2>
              <p className="text-lg pb-4 leading-relaxed">
                {bookDetail.descripcion}
              </p>

              <h2 className="text-4xl font-bold pb-2">Estado</h2>
              <p className="text-lg pb-4">
                {bookDetail.stock > 0 ? "Disponible" : "Agotado"}
              </p>
            </div>
          </div>
        </div>

        {/* Carrito */}
        {cart.length > 0 && (
            <div className="fixed right-0 top-20 w-[300px] h-[calc(90vh-5rem)] bg-white shadow-lg p-4 overflow-y-auto">
              <SideDetail />
            </div>
        )}
      </>
  );
};

export default BookDetail;