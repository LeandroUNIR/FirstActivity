import { useState } from "react";
import Button from "./Button";

const Carrousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div className="w-full max-w-2xl mx-auto flex items-center justify-center p-4">
            {/* Botón Previous (Lado Izquierdo) */}
            <div className="left-0 z-10 px-2">
                <Button onClick={() => setCurrentIndex((currentIndex - 1 + 3) % 3)}>&lt; Prev</Button>
            </div>

            {/* Contenedor de las imágenes */}
            <div className="carrousel flex overflow-hidden rounded-xl shadow-lg bg-gray-100 w-full h-[300px] md:h-[400px]">
                {currentIndex === 0 && (
                    <div className="w-full h-full flex items-center justify-center fade-in">
                        <img 
                            src="/prueba.jpg" 
                            alt="Item 1" 
                            className="w-full h-full object-cover" 
                        />
                    </div>
                )}
                {currentIndex === 1 && (
                    <div className="w-full h-full flex items-center justify-center fade-in">
                        <img 
                            src="/prueba2.jpg" 
                            alt="Item 2" 
                            className="w-full h-full object-cover" 
                        />
                    </div>
                )}
                {currentIndex === 2 && (
                    <div className="w-full h-full flex items-center justify-center fade-in">
                        <img 
                            src="/prueba3.jpg" 
                            alt="Item 3" 
                            className="w-full h-full object-cover" 
                        />
                    </div>
                )}
            </div>

            {/* Botón Next (Lado Derecho) */}
            <div className="right-0 z-10 px-2">
                <Button onClick={() => setCurrentIndex((currentIndex + 1) % 3)}>Next &gt;</Button>
            </div>
        </div>
    );
}

export default Carrousel;