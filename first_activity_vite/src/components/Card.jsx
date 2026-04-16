import Button from "./button";
import { PiClipboardTextFill } from "react-icons/pi";
const Card = ({ title, description, imageRoute }) => {
    return (
        <div className="bg-neutral-primary-soft block max-w-sm border border-default rounded-base shadow-xs rounded-lg">
            <a href="#">
                <img className="rounded-t-base" src={imageRoute} alt="" />
            </a>
            <div className="p-3 text-center">
                <a href="#">
                    <h5 className="mt-3 mb-2 text-2xl font-semibold tracking-tight text-heading">{title}</h5>
                    <p className="text-base text-body mb-4">{description}</p>
                </a>
                <Button color="green" icon={<PiClipboardTextFill />}>
                    saber más
                </Button>

            </div>
        </div>
    );
}
export default Card;