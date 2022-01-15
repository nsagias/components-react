import React from "react";

import "./LoginForm.css";

export default function LoginForm() {
  return (
    <>
    
      <form action="" method="post">
    

      <div className="container">
        <label><b>Username</b></label>
        <input type="text" placeholder="Enter Username" name="uname" required />

        <label ><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required />
            
        <button type="submit">Login</button>
        
      </div>

      <div className="container-2" >
        <button type="button" className="cancel-btn">Cancel</button>
        <span className="span-password">Forgot <a href="#">password?</a></span>
      </div>
    </form>



    </>
  );
}