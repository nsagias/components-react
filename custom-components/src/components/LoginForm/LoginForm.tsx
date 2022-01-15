import React, {useState} from "react";

import "./LoginForm.css";


export default function LoginForm() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const onSubmit = (event: { preventDefault: () => void; }) => {
      event.preventDefault();
    };


  return (
    <>
    
      <form onSubmit={onSubmit}>
      <div className="container">
       <a className="login-form"><h1>LOGIN FORM</h1></a>
       
        <label className="username"><b>Username</b></label>
        <input
          type="text"
          name="uname"
          value={email}
          placeholder="Enter Username"
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        
        <label className="pword" ><b>Password</b></label>
        <input
          type="password"
          name="psw"
          value={password}
          placeholder="Enter Password"
          onChange={(event) => setPassword(event.target.value)}
          required
        />
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