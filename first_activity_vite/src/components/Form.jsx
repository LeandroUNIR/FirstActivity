import Button from "./button"
import Input from "./Input";
const Form = () => {
    return (
    <form>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
            <Input></Input>
        </div>
        <div className="mb-6">

        </div>
        <div className="mb-6">

        </div>
        <div className="mb-6">

        </div>
        <div className="mb-6">
            
        </div>
        <Button color="blue" type="submit">Submit</Button>
    </form>
    )
};
export default Form;