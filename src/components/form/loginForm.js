import React from "react";
import Modal from "react-modal";
import PropTypes from "prop-types";

import "./form.css";
import Button from "../button/button";

const LoginForm = ( { loginIsOpen, closeModal } ) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const submitForm = (e) => {
    e.preventDefault();
  }

  return(
    <Modal
      className="modal"
      isOpen={loginIsOpen}
      onRequestClose={closeModal}
      ariaHideApp={false}
    >
      <div className="close-modal-container">
        <span className="close-modal" onClick={closeModal}>&times;</span>
      </div>
      <form
        onSubmit={(e) => submitForm(e)}
        method="POST"
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <input autoFocus type="text" value={email} placeholder="alias@host.com" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" value={password} placeholder="password" onChange={(e) => setPassword(e.target.value)} />
        <Button onSubmit={(e) => submitForm(e)} className="login-button">login</Button>
      </form>
    </Modal>
  );
}

LoginForm.propTypes = {
  loginIsOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
}

export default LoginForm;
