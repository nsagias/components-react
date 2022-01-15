import React from "react";

export default function LoginForm() {
  return (
    <>
    
      <form action="" method="post">
      {/* <div className="imgcontainer">
        <img src="img_avatar2.png" alt="Avatar" className="avatar">
      </div> */}

      <div className="container">
        <label><b>Username</b></label>
        <input type="text" placeholder="Enter Username" name="uname" required />

        <label><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required />
            
        <button type="submit">Login</button>
        
      </div>

      <div class="container" style="background-color:#f1f1f1">
        <button type="button" className="cancelbtn">Cancel</button>
        <span className="psw">Forgot <a href="#">password?</a></span>
      </div>
    </form>

    </>
  );
}