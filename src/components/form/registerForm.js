import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import "./form.css";
import { registerUser } from "../../actions/userAction";
import { primaryBlue } from "../../utils/colours";
import Button from "../button/button";
import Panel from "../panel/panel";

const RegisterForm = ({ registerUser }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [checkEmail, setCheckEmail] = React.useState(true);

  const submitForm = async () => {
    registerUser({email, password});
  }

  return(
    <Panel width="40%" background={primaryBlue}>
      <h3 className="form-title">Register</h3>
      <input type="text" value={email} placeholder="alias@host.com" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" value={password} placeholder="password" onChange={(e) => setPassword(e.target.value)} />
      <div className="newsletter-confirm-container">
        <input type="checkbox" checked={checkEmail} onChange={(e) => setCheckEmail(e.target.checked)} />
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
