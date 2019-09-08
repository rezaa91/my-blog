import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import "./form.css";
import { registerUser } from "../../actions/userAction";
import { primaryBlue } from "../../utils/colours";
import { validateEmail, validatePassword } from "../../utils/validators";
import Button from "../button/button";
import Panel from "../panel/panel";

const RegisterForm = ({ registerUser }) => {
  const [email, setEmail] = React.useState('');
  const [emailValidation, setEmailValidation] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordValidation, setPasswordValidation] = React.useState('');
  const [subscribe, setSubscription] = React.useState(true);

  const checkPassword = () => {
    if (!validatePassword(password)) {
      setPasswordValidation('Ensure a lowercase letter, an uppercase letter, a minimum of 6 characters');
    } else {
      setPasswordValidation('');
    }
  }

  const checkEmail = () => {
    if (!validateEmail(email)) {
      setEmailValidation('Please provide a valid email address');
    } else {
      setEmailValidation('');
    }
  }

  const submitForm = async () => {
    if (!validateEmail(email) || !validatePassword(password)) {
      return;
    }

    registerUser({email, password, subscribe});
  }

  return(
    <Panel width="40%" background={primaryBlue}>
      <h3 className="form-title">Register</h3>
      <input type="text" value={email} placeholder="alias@host.com" onChange={(e) => setEmail(e.target.value)} onKeyUp={checkEmail} />
      <p className="validation-error">{emailValidation}</p>

      <input type="password" value={password} placeholder="password" onChange={(e) => setPassword(e.target.value)} onKeyUp={checkPassword} />
      <p className="validation-error">{passwordValidation}</p>

      <div className="newsletter-confirm-container">
        <input type="checkbox" checked={subscribe} onChange={(e) => setSubscription(e.target.checked)} />
          <span>Receive more great content via our monthly emails</span>
      </div>
      <Button action={submitForm} className="register-button">Join</Button>
    </Panel>
  );
}

RegisterForm.propTypes = {
  registerUser: PropTypes.func.isRequired,
}

export default connect(null, { registerUser })(RegisterForm);
