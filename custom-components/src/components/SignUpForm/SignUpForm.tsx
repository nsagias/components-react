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
      <form className="signup-form" action="/action_page.php" >
        <div className="container">
          <a className="signup-form-title"><h1>Sign Up</h1></a>
          <p>Enter email and password to create an account.</p>
        

          <label className="email-label"><b>Email</b></label>
          <input type="email" placeholder="Enter Email" name="email" required />

          <label className="password-label"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required />

          <label className="password-confirm-label"><b>Confirm Password</b></label>
          <input type="password" placeholder="Confirm Password" name="psw-repeat" required />
          
          
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