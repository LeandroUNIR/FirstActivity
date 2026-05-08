import { useState, useEffect } from "react";
import Input from "../../components/Input";
import { useForm } from "../../hooks/useForm";
import Button from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";

const ForgotPassword = () => {
    const navigate = useNavigate();

    const {
        email,
        onInputChange,
        errors,
        setFieldError,
        clearErrors,
    } = useForm({
        email: "",
    });

    const [submitted, setSubmitted] = useState(false);
    const [countdown, setCountdown] = useState(6);

    // Regex igual al login
    const emailRegex = /^[^\s@]+@[^\s@]+\.(com|co)$/;

    // Control botón
    const isFormValid = emailRegex.test(email);

    // Validación en tiempo real
    const handleChange = (e) => {
        const { value } = e.target;

        onInputChange(e);

        if (value.length === 0) {
            setFieldError("email", "Campo requerido");
        } else if (!value.includes("@")) {
            setFieldError("email", "Debe incluir @");
        } else if (!emailRegex.test(value)) {
            setFieldError("email", "Formato inválido");
        }
    };

    // Submit
    const onSubmit = (e) => {
        e.preventDefault();

        if (!isFormValid) return;

        clearErrors();

        // Simulación backend (no mostrar si existe o no)
        console.log("Solicitud recuperación enviada para:", email);

        // Siempre mostramos mismo mensaje (seguridad)
        setSubmitted(true);
    };

    // Redirección opcional
    useEffect(() => {
        if (!submitted) return;

        if (countdown === 0) {
            navigate("/login");
            return;
        }

        const timer = setTimeout(() => {
            setCountdown((prev) => prev - 1);
        }, 1000);

        return () => clearTimeout(timer);
    }, [submitted, countdown, navigate]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form
                className="bg-white p-6 rounded-xl shadow-md w-80"
                onSubmit={onSubmit}
                noValidate
            >
                <h2 className="text-xl font-bold mb-4 text-center">
                    Recuperar contraseña
                </h2>

                <Input
                    label="Correo registrado"
                    type="email"
                    name="email"
                    placeholder="ejemplo@correo.com"
                    value={email}
                    onChange={handleChange}
                    error={errors.email}
                    helpText={"Ingresa el correo registrado para recibir instrucciones de restablecimiento."}
                />

                {/* Mensaje seguro UX */}
                {submitted && (
                    <div className="bg-blue-100 text-blue-700 text-xs p-2 rounded mb-2 text-center">
                        Si el correo está registrado, recibirás instrucciones para restablecer tu contraseña.
                        Serás redirigido al login en {countdown} segundos.
                    </div>
                )}

                <Button type="submit" disabled={!isFormValid || submitted}>
                    Enviar instrucciones
                </Button>

                <p className="text-sm mt-3 text-center">
                    <Link to="/login" className="text-blue-500 underline">
                        Volver al login
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default ForgotPassword;