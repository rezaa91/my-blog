import React from "react";
import Modal from "react-modal";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import "./form.css";
import { loginUser } from "../../actions/userAction";
import Button from "../button/button";

const LoginForm = ({ loginIsOpen, closeModal, loginUser }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [validationMessage, setValidationMessage] = React.useState('');

  const submitForm = (e) => {
    e.preventDefault();

    loginUser({email: email.toLowerCase(), password})
      .then(() => closeModal())
      .catch(() => setValidationMessage('Incorrect login details, please try again.'));
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
        <input required autoFocus type="email" value={email} placeholder="alias@host.com" onChange={(e) => setEmail(e.target.value)} />
        <input required type="password" value={password} placeholder="password" onChange={(e) => setPassword(e.target.value)} />
        <div className="login-validation-error">{validationMessage}</div>
        <Button onSubmit={(e) => submitForm(e)} className="login-button">login</Button>
      </form>
    </Modal>
  );
}

LoginForm.propTypes = {
  loginIsOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  loginUser: PropTypes.func.isRequired,
}

export default connect(null, { loginUser })(LoginForm);
