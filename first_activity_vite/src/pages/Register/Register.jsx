import { useState, useEffect } from "react";
import Input from "../../components/Input";
import { useForm } from "../../hooks/useForm";
import Button from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const {
    name,
    lastname,
    email,
    password,
    confirmPassword,
    address,
    phone,
    onInputChange,
    errors,
    setFieldError,
    clearErrors,
  } = useForm({
    name: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
    phone: "",
  });

  const [accepted, setAccepted] = useState(false);
  const [showPolicy, setShowPolicy] = useState(false);

  // nuevos estados para éxito y redirección
  const [success, setSuccess] = useState(false);
  const [countdown, setCountdown] = useState(3);

  const nameRegex = /^[a-zA-Z\s]*$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]*$/;

  const handleChange = (e) => {
    const { name, value } = e.target;

    onInputChange(e);

    if (name === "name" || name === "lastname") {
      if (!nameRegex.test(value)) {
        setFieldError(name, "Solo se permiten letras");
      } else {
        setFieldError(name, "");
      }
    }

    if (name === "email") {
      if (value.length > 0 && !emailRegex.test(value)) {
        setFieldError("email", "Correo inválido");
      } else {
        setFieldError("email", "");
      }
    }

    if (name === "password") {
      if (value.length > 0 && value.length < 6) {
        setFieldError("password", "Mínimo 6 caracteres");
      } else if (value.length > 10) {
        setFieldError("password", "Máximo 10 caracteres");
      } else {
        setFieldError("password", "");
      }
    }

    if (name === "confirmPassword") {
      if (value.length > 0 && value !== password) {
        setFieldError("confirmPassword", "No coincide");
      } else {
        setFieldError("confirmPassword", "");
      }
    }

    if (name === "address") {
      if (value.length > 0 && value.length < 5) {
        setFieldError("address", "Dirección muy corta");
      } else {
        setFieldError("address", "");
      }
    }

    if (name === "phone") {
      if (!phoneRegex.test(value)) {
        setFieldError("phone", "Solo números");
      } else if (value.length > 0 && (value.length < 7 || value.length > 10)) {
        setFieldError("phone", "Debe tener entre 7 y 10 dígitos");
      } else {
        setFieldError("phone", "");
      }
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    clearErrors();

    console.log("Registro correcto", {
      name,
      lastname,
      email,
      password,
      address,
      phone,
    });

    // activar estado de éxito
    setSuccess(true);
  };

  // efecto para cuenta regresiva y redirección
  useEffect(() => {
    if (!success) return;

    if (countdown === 0) {
      navigate("/login");
      return;
    }

    const timer = setTimeout(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [success, countdown, navigate]);

  const isFormValid =
      name &&
      lastname &&
      nameRegex.test(name) &&
      nameRegex.test(lastname) &&
      name.length <= 20 &&
      lastname.length <= 20 &&
      emailRegex.test(email) &&
      password.length >= 6 &&
      password.length <= 10 &&
      password === confirmPassword &&
      address.length >= 5 &&
      phoneRegex.test(phone) &&
      phone.length >= 7 &&
      phone.length <= 10 &&
      accepted;

  return (
      <div className="h-screen flex items-center justify-center bg-gray-100">
        <form
            className="bg-white p-4 rounded-xl shadow-md w-full max-w-md max-h-[90vh] overflow-y-auto"
            onSubmit={onSubmit}
        >
          <h2 className="text-lg font-bold text-center">Registro</h2>

          <div className="text-xs font-semibold text-gray-500">
            Datos personales
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Input label="Nombre" name="name" value={name} onChange={handleChange} error={errors.name} maxLength={20} />
            <Input label="Apellido" name="lastname" value={lastname} onChange={handleChange} error={errors.lastname} maxLength={20} />
          </div>

          <div className="text-xs font-semibold text-gray-500">
            Cuenta
          </div>

          <Input
              label="Correo"
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              error={errors.email}
              maxLength={30}
              helpText="Ejemplo: usuario@correo.com"
              helpOffset="ml-2"
          />

          <div className="grid grid-cols-2 gap-2">
            <Input
                label="Contraseña"
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                error={errors.password}
                maxLength={10}
                helpText="Entre 6 y 10 caracteres"
                helpOffset="ml-2"
            />
            <Input
                label="Confirmar"
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleChange}
                error={errors.confirmPassword}
                maxLength={10}
            />
          </div>

          <div className="text-xs font-semibold text-gray-500">
            Información de envío
          </div>

          <Input
              label="Dirección"
              name="address"
              value={address}
              onChange={handleChange}
              error={errors.address}
              maxLength={30}
          />

          <Input
              label="Teléfono"
              name="phone"
              value={phone}
              onChange={handleChange}
              error={errors.phone}
              maxLength={10}
              helpText="Solo números, entre 7 y 10 dígitos"
              helpOffset="ml-2"
          />

          <div className="mt-4 mb-4 text-xs">
            <label className="flex items-center gap-2">
              <input
                  type="checkbox"
                  checked={accepted}
                  onChange={() => setAccepted(!accepted)}
              />
              Acepto el tratamiento de datos personales
            </label>

            <button
                type="button"
                className="text-blue-500 underline mt-1"
                onClick={() => setShowPolicy(!showPolicy)}
            >
              Ver política
            </button>

            {showPolicy && (
                <div className="bg-gray-100 p-2 mt-1 rounded text-xs h-10 overflow-y-auto border">
                  Aquí irá la política de tratamiento de datos.
                </div>
            )}
          </div>

          {/* mensaje de éxito */}
          {success && (
              <div className="bg-green-100 text-green-700 text-xs p-2 rounded mb-2 text-center">
                Registro exitoso. Serás redirigido al login en {countdown} segundos.
              </div>
          )}

          <Button type="submit" disabled={!isFormValid || success}>
            Registrarse
          </Button>

          <p className="text-xs text-center">
            ¿Ya tienes cuenta?{" "}
            <Link to="/login" className="text-blue-500 underline">
              Inicia sesión
            </Link>
          </p>
        </form>
      </div>
  );
};

export default Register;