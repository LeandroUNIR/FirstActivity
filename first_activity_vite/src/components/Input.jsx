const Input = ({ type, placeholder, value, id }) => {
    return (
        <input type={type} placeholder={placeholder} value={value} id={id} className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs" />
    );
}
export default Input;