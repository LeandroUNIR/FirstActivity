import Books from '../../data/books.json';

const Catalog = () => {
    return (
        <div class="flex flex-row gap-10 p-6 max-w-5xl mx-auto">
            {
                Books.map((book,i) => (
                    <div className="basis-full" key={i}>
                        <h3>{book.titulo}</h3>
                        <p>{book.autor}</p>
                    </div>
                ))
            }
            {/* <div class="basis-full">01</div>
            <div class="basis-full">02</div>
            <div class="basis-full">03</div> */}
        </div>
    );
}

export default Catalog;