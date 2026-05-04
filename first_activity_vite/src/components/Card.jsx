import Button from "./button";
import { PiClipboardTextFill } from "react-icons/pi";
import { useContext } from 'react';
import { GlobalContext } from '../context/AuthContext/global/GlobalContext';
import { Link } from 'react-router-dom';

const Card = ({ title, description, imageRoute, bookId }) => {
    const { setBookId } = useContext(GlobalContext);
    return (
        <div className="bg-neutral-primary-soft block max-w-sm border border-default rounded-base shadow-xs rounded-lg">
            <img className="object-cover" src={imageRoute} alt="" />
            <div className="p-3 text-center">
                <h5 className="mt-3 mb-2 text-2xl font-semibold tracking-tight text-heading">{title}</h5>
                <p className="text-base text-body mb-4">{new Intl.NumberFormat('es-CO', {
                    style: 'currency',
                    currency: 'COP',
                    minimumFractionDigits: 0
                }).format(description)}</p>
                <Link to="bookDetail">
                    <Button color="gray" icon={<PiClipboardTextFill />} type="button" onClick={() => setBookId(bookId)}>
                        saber más
                    </Button>
                </Link>
            </div>
        </div>
    );
}
export default Card;