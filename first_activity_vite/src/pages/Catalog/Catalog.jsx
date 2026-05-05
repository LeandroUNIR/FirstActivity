import Card from "../../components/Card";
import Books from "../../data/books.json";
import { useCart } from "../../context/cart/CartProvider";
import SideDetail from "../../components/SideDetail";

const Catalog = () => {
  const { cart } = useCart();

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold text-left">Libros más populares</h1>
        <div className="flex flex-wrap flex-row gap-10 p-6 max-w-5xl mx-auto">
          {Books.map((book, i) => (
            <div className="basis-64 text-center" key={i}>
              <Card
                title={book.titulo}
                description={book.costo_cop}
                imageRoute="/prueba3.jpg"
                bookId={book.id}
              />
            </div>
          ))}
        </div>
      </div>
      {cart.length > 0 ? <SideDetail></SideDetail> : <></>}
    </>
  );
};

export default Catalog;
