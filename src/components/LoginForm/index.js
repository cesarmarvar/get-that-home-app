import { Formik } from "formik";
import { useAuth } from "../../context/auth-context";
import Button from "../Button";
import Input from "../Input";
import * as Style from "./styles";
import { BsPersonPlusFill } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { colors } from "../../styles";
import { useEffect } from "react";

function LoginForm({ handleOpen }){
  const { login, error, setError, user } = useAuth();

  function validate(values){
    const { email, password } = values;
    const errors = {};

    if(email === ""){
      errors.email = "Can't be blank";
    }else if(!/.+@.+\.[A-Za-z]+$/.test(email)){
      errors.email = "Email is invalid";
    }

    if(password === ""){
      errors.password = "Can't be blank";
    }else if(password.length <= 6) {
      errors.password = "Must have six characters";
    }

    return errors;
  }

  const initialValues = { email: "", password: "" };

  function handleSubmit(values){
    login(values);
  }

  useEffect(() => {
    if(user) {
      handleOpen(false);
      setError(null)
    }
  }, [user, handleOpen, setError])

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validate={validate}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isValid
      }) => (
        <Style.Form onSubmit={handleSubmit}>
          <Style.Header>
            <Style.Title>Login</Style.Title>
            <IoClose
              onClick={() => handleOpen(false)}
              size="30px"
              color={colors.gray.regular}
              style={{cursor: "pointer"}} 
            />
          </Style.Header>
          <Input 
            id="email"
            type="email"
            label="EMAIL"
            placeholder="user@mail.com"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email && (
            <Style.ErrorMessage>{errors.email}</Style.ErrorMessage>
          )}
          <Input 
            id="password"
            type="password"
            label="PASSWORD"
            placeholder="********"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password && (
            <Style.ErrorMessage>{errors.password}</Style.ErrorMessage>
          )}
          { error ? <p> Email or password is incorrect </p> : null }
          <Button
            disabled={!isValid}
            IconL={ BsPersonPlusFill }
          >LOGIN</Button>
        </Style.Form>
      )}
    </Formik>
  );
}

export default LoginForm;
