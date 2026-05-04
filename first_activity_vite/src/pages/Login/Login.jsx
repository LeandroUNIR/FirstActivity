import Input from "../../components/Input";
import { useForm } from "../../hooks/useForm";
import Button from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";

// Usuario mock (simulación backend) borrar cuando se integre el back
const MOCK_USER = {
  email: "juan@gmail.com",
  password: "123456",
};

const Login = () => {
  const navigate = useNavigate();

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

  // Regex centralizado
  const emailRegex = /^[^\s@]+@[^\s@]+\.(com|co)$/;

  // Control botón
  const isFormValid =
      emailRegex.test(email) &&
      password.length >= 6 &&
      password.length <= 10;

  // Validación en tiempo real
  const handleChange = (e) => {
    const { name, value } = e.target;

    onInputChange(e);

    if (name === "email") {
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

  // Submit validacion ususario
  const onSubmit = (e) => {
    e.preventDefault();

    if (!isFormValid) return;

    clearErrors();

    let valid = true;

    if (!emailRegex.test(email)) {
      setFieldError("email", "Correo inválido");
      valid = false;
    }

    if (password.length < 6 || password.length > 10) {
      setFieldError("password", "Debe tener entre 6 y 10 caracteres");
      valid = false;
    }

    if (!valid) return;

    // Validación de usuario (mock) borrar cuando se integre backend
    if (email !== MOCK_USER.email || password !== MOCK_USER.password) {
      setFieldError("password", "Correo o contraseña incorrectos");
      return;
    }

    console.log("Login correcto", { email, password });

    // Redirección usuario correcto y guarda usuario
    localStorage.setItem("user", JSON.stringify({ email }));
    navigate("/profile");
  };

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
              placeholder="ejemplo@correo.com"
              value={email}
              onChange={handleChange}
              error={errors.email}
          />

          <Input
              label="Contraseña"
              type="password"
              name="password"
              placeholder="******"
              value={password}
              onChange={handleChange}
              error={errors.password}
              helpText="Entre 6 y 10 caracteres"
          />

          <Button type="submit" disabled={!isFormValid}>
            Ingresar
          </Button>

          <p className="text-sm mt-3 text-center">
            <Link to="/register" className="text-blue-500 underline">
              Crear cuenta
            </Link>{" "}
            o{" "}
            <Link to="/forgotpass" className="text-blue-500 underline">
              Recuperar contraseña
            </Link>
          </p>
        </form>
      </div>
  );
};

export default Login;