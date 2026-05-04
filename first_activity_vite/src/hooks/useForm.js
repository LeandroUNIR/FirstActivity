import { useState } from "react";

export const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const onInputChange = ({ target }) => {
    const { name, value } = target;

    // actualización segura
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));

    //  limpiar error al escribir
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const setFieldError = (field, message) => {
    setErrors((prev) => ({
      ...prev,
      [field]: message,
    }));
  };

  const clearErrors = () => {
    setErrors({});
  };

  return {
    ...formState,
    formState,
    errors,
    onInputChange,
    setFieldError,
    clearErrors,
  };
};