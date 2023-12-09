import { useState } from "react";

export const useForm = (initialValues) => {
    const [form, setForm] = useState(initialValues);
    
      const handleChange = ({ target }) => {
        setForm({
          ...form,
          [target.name]: target.value,
        });
      };

      return { form, handleChange}
} 