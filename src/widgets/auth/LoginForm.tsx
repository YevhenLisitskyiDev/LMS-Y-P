import React, {  SyntheticEvent } from "react";
import { Redirect } from "react-router-dom";

// @ts-ignore
import Form from "../../teleporthq/components/form";
import store from "../../store";


const LoginForm = () => {
  const user = store.user.hook();

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault(); 
    const [email, password] = e.currentTarget.querySelectorAll("input");

    store.auth.signIn({ email: email.value, password: password.value });
  };
  return user ? <Redirect to="/" />: <Form submitHandler={handleSubmit} />;
};

export default LoginForm;
