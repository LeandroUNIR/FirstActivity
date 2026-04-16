import { PiClipboardTextFill } from "react-icons/pi";

const Footer = () => {
    return (
        <footer className="bg-neutral-primary-soft rounded-base shadow-xs border border-default mb-1">
            <div className="w-full max-w-screen-xl mx-auto p-4">
                <div className="sm:flex sm:items-center sm:justify-between">
                        <PiClipboardTextFill className="text-2xl text-primary" />
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-body sm:mb-0">
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">About</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
