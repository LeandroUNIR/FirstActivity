import Card from "../../components/Card";
import Input from "../../components/Input";
// import Form from "../../components/Form";
import Button from "../../components/button";
import Carrousel from "../../components/Carrousel";

const Landing = () => {
    return (
        <div className="flex flex-col gap-10 p-6 max-w-5xl mx-auto">
            <h1 className="text-3xl font-bold text-center">Bienvenido a la página principal</h1>
            
            {/* Contenedor para que la Card no ocupe todo el ancho si no quieres */}
            <div className="flex justify-center">
                <Card title="Titulo personalizable" description="Contenido otro" imageRoute="/prueba3.jpg" />
                <Card title="Titulo personalizable" description="Contenido otro" imageRoute="/prueba3.jpg" />
                <Card title="Titulo personalizable" description="Contenido otro" imageRoute="/prueba3.jpg" />
            </div>

            <h5 className="text-3xl font-semibold text-heading text-center">Contáctanos!</h5>
            <form className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label htmlFor="first_name" className="block mb-2.5 text-sm font-medium text-heading">Nombre</label>
                        <Input type="text" id="first_name" placeholder="Sebastian" />
                    </div>
                    <div>
                        <label htmlFor="last_name" className="block mb-2.5 text-sm font-medium text-heading">Apellido</label>
                        <Input type="text" id="last_name" placeholder="Orrego" />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block mb-2.5 text-sm font-medium text-heading">Número de teléfono</label>
                        <Input type="tel" id="phone" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2.5 text-sm font-medium text-heading">Correo electrónico</label>
                        <Input type="email" id="email" placeholder="correo@ejemplo.com" />
                    </div>
                </div>
                <div className="flex justify-end">
                    <Button color="blue" type="submit">Enviar</Button>
                </div>
            </form>

            {/* Le quitamos el h-64 fijo y dejamos que su contenido dicte el tamaño */}
            <div className="w-full bg-neutral-primary-soft rounded-lg flex py-6">
                <Carrousel />
            </div>
        </div>
    );
};

export default Landing;