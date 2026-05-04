import { useContext } from 'react';
import { GlobalContext } from '../../context/AuthContext/global/GlobalContext';
import Books from '../../data/books.json';
import Button from '../../components/button';
const BookDetail = () => {
    const { bookId } = useContext(GlobalContext);
    const bookDetail = Books.find(book => book.id === bookId)
    return (

        <div className="grid grid-cols-2 grid-rows-2 gap-4 pt-20">
            <div >
                <img className="object-cover" src="/prueba3.jpg" alt="" />
            </div>
            <div className="col-start-1 row-start-2 text-center pt-10">
                <Button color="green" type="button">
                    Agregar al carrito
                </Button>
            </div>
            <div className="row-span-2 col-start-2 row-start-1 pl-20 pt-10">
                <h2 className="text-5xl pb-4">Título del libro</h2>
                <p className="text-xl pb-4">{bookDetail.titulo}</p>
                <h2 className="text-5xl pb-4">Autor</h2>
                <p className="text-xl pb-4">{bookDetail.autor}</p>
                <h2 className="text-5xl pb-4">Precio</h2>
                <p className="text-xl pb-4">{new Intl.NumberFormat('es-CO', {
                    style: 'currency',
                    currency: 'COP',
                    minimumFractionDigits: 0
                }).format(bookDetail.costo_cop)}</p>
                <h2 className="text-5xl pb-4">Descripción</h2>
                <p className="text-xl pb-4">{bookDetail.descripcion}</p>
                <h2 className="text-5xl pb-4">Estado</h2>
                <p className="text-xl pb-4">{bookDetail.stock > 0 ? 'Disponible' : 'Agotado'}</p>
            </div>

        </div>



    );
};

export default BookDetail;