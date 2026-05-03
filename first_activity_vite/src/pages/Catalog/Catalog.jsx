import Card from '../../components/Card';
import Books from '../../data/books.json';

const Catalog = () => {
    return (
        <div className="flex flex-wrap flex-row gap-10 p-6 max-w-5xl mx-auto">
            <h1 className="text-3xl font-bold text-left">Libros más populares</h1>
            <div className="flex flex-wrap flex-row gap-10 p-6 max-w-5xl mx-auto">
                {
                    Books.map((book, i) => (
                        <div className="basis-64" key={i}>
                            <Card title={book.titulo} description={book.descripcion} imageRoute="/prueba3.jpg" />
                        </div>
                    ))
                }
            </div>
            {/* <div class="basis-full">01</div>
            <div class="basis-full">02</div>
            <div class="basis-full">03</div> */}
        </div>
    );
}

export default Catalog;