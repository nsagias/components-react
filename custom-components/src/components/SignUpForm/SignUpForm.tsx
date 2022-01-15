import React, { useState } from "react";
import "./SignUpForm.css";

export default function SignUpForm() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
  };

  return (
    <>
      <form className="signup-form" onSubmit={onSubmit} >
        <div className="container">
          <a className="signup-form-title"><h1>Sign Up</h1></a>
          <p>Enter email and password to create an account.</p>
        

          <label className="email-label"><b>Email</b></label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter Email"
            onChange={(event) => setEmail(event.target.value)}
            required
          />

          <label className="password-label"><b>Password</b></label>
          <input
            type="password"
            name="psw"
            value={password}
            placeholder="Enter Password"
            onChange={(event) => setPassword(event.target.value)}
            required
          />

          <label className="password-confirm-label"><b>Confirm Password</b></label>
          <input
            type="password"
            name="psw-confirm"
            value={confirmPassword}
            placeholder="Confirm Password"
            onChange={(event) => setConfirmPassword(event.target.value)}
            required
          />
                  
          <p>By creating an account you agree to our <a className="t-c" href="#">Privacy</a>.</p>

          <div className="clearfix">
            <button type="button" className="cancel-btn">Cancel</button>
            <button type="submit" className="signup-btn">Sign Up</button>
          </div>
          
        </div>
      </form>
    
    </>
  );
}