import Input from "../../components/Input";
import { useForm } from "../../hooks/useForm";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    email,
    password,
    onInputChange,
    errors,
    setFieldError,
    clearErrors,
  } = useForm({
    email: "",
    password: "",
  });

  // Validación en tiempo real
  const handleChange = (e) => {
    const { name, value } = e.target;

    onInputChange(e);

    // EMAIL
    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.(com|co)$/;

      if (value.length === 0) {
        setFieldError("email", "Campo requerido");
      } else if (!value.includes("@")) {
        setFieldError("email", "Debe incluir @");
      } else if (!emailRegex.test(value)) {
        setFieldError(
          "email",
          "Formato inválido (ej: usuario@dominio.com)"
        );
      }
    }

    // PASSWORD
    if (name === "password") {
      if (value.length === 0) {
        setFieldError("password", "Campo requerido");
      } else if (value.length < 6) {
        setFieldError("password", "Mínimo 6 caracteres");
      } else if (value.length > 10) {
        setFieldError("password", "Máximo 10 caracteres");
      }
    }
  };

  // Validación final
  const onSubmit = (e) => {
    e.preventDefault();

    if (!isFormValid) return; // bloqueo total

    clearErrors();

    let valid = true;

    const emailRegex = /^[^\s@]+@[^\s@]+\.(com|co)$/;

    if (!emailRegex.test(email)) {
      setFieldError("email", "Correo inválido");
      valid = false;
    }

    if (password.length < 6 || password.length > 10) {
      setFieldError("password", "Debe tener entre 6 y 10 caracteres");
      valid = false;
    }

    if (!valid) return;

    console.log("Login correcto", { email, password });
  };

  // Control botón login
  const emailRegex = /^[^\s@]+@[^\s@]+\.(com|co)$/;

  const isFormValid =
    emailRegex.test(email) &&
    password.length >= 6 &&
    password.length <= 10;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        className="bg-white p-6 rounded-xl shadow-md w-80"
        onSubmit={onSubmit}
        noValidate
      >
        <h2 className="text-xl font-bold mb-4 text-center">Login</h2>

        <Input
          label="Correo"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          error={errors.email}
        />

        <Input
          label="Contraseña"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          error={errors.password}
        />

        <Button type="submit" disabled={!isFormValid}>
          Ingresar
        </Button>

        <p className="text-sm mt-3 text-center">
          ¿No tienes cuenta?{" "}
          <Link to="/registro" className="text-blue-500 underline">
            Regístrate aquí
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;