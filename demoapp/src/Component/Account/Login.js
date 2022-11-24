import React from "react";
import Input from "./Input";
import Logo from "./Logo";
import Modal from "./Modal";
import ModalBack from "./ModalBack";
import { useState } from "react";
import "../../Styles/appStyle.scss";

function Login() {
  const [isVisible, setIsVisible] = useState(true);

  const handleSubmit = () => {
    //e.preventDefault();
    setIsVisible(false);
  };

  const handleRemount = () => {
    setIsVisible(true);
  };

  const onSubmit = () => {};

  return (
    <React.Fragment>
      {isVisible ? (
        <Modal onSubmit={handleSubmit} key="modal" />
      ) : (
        <ModalBack onClick={handleRemount} key="bringitback" />
      )}
    </React.Fragment>
  );
}

export default Login;
