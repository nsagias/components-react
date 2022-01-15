import React from "react";
import "./SignUpForm.css";

export default function SignUpForm() {
  return (
    <>
      <form className="signup-form" action="/action_page.php" >
        <div className="container">
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account.</p>
        
          
          <label><b>Email</b></label>
          <input type="email" placeholder="Enter Email" name="email" required />

          <label><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required />

          <label><b>Repeat Password</b></label>
          <input type="password" placeholder="Repeat Password" name="psw-repeat" required />
          
          
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