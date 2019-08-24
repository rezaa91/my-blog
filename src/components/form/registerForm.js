import React from "react";

import "./form.css";
import {primaryBlue} from "../../utils/colours";
import Button from "../button/button";
import Panel from "../panel/panel";

const RegisterForm = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [checkEmail, setCheckEmail] = React.useState(true);

  const submitForm = () => {

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
      <Button onSubmit={(e) => submitForm(e)} className="register-button">Join</Button>
    </Panel>
  );
}

export default RegisterForm;
