import { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../../context/Provider";
import { register } from "../../context/actions/auth/register";
import { useHistory } from "react-router-dom";

const useForm = () => {
  const [form, setForm] = useState({});
  const [fieldErrors, setFieldErrors] = useState({});

  const history = useHistory();

  const {
    authDispatch,
    authState: {
      auth: { loading, error, data },
    },
  } = useContext(GlobalContext);

  console.log("data", data);
  console.log("error", error);
  console.log("loading", loading);

  useEffect(() => {
    if (error) {
      for (const item in error) {
        setFieldErrors({ ...fieldErrors, [item]: error[item][0] });
      }
    }
  }, [error]);

  useEffect(() => {
    if (data) {
      history.push("/auth/login");
    }
  }, [data]);

  const onChange = (e, { name, value }) => {
    setForm({ ...form, [name]: value });
  };

  const registerFormValid =
    !form.username?.length ||
    !form.firstName?.length ||
    !form.lastName?.length ||
    !form.password?.length ||
    !form.email?.length;

  console.log("form", form);
  const onSubmit = () => {
    setFieldErrors({});
    register(form)(authDispatch);
  };

  return { form, onChange, loading, fieldErrors, registerFormValid, onSubmit };
};

export default useForm;
