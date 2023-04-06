import React, { useContext, useState } from "react";
import Input from "../Components/Input";
import Button from "../Components/Button";
import LoginBG from "../assets/img/login_BG.png";
import { useNavigate } from "react-router-dom";
import { DataTransferContext } from "../App";

const LoginPage = () => {
    
  const { setName } = useContext(DataTransferContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const userData = {
    name: "Mohit",
    age: "35",
    address: "America",
    mob: "9485898497",
    email: "albertmartin@gmail.com",
    password: "12345",
  };

  function fun() {
    if (
      (email === userData.name && password === userData.password) ||
      (email === "Admin" && password === "12345")
    ) {
      setName(email);
      navigate("/homePage");
    } else {
      alert("Credential Wrong__ Please Enter Mohit Or Admin :)");
    }
  }

  return (
    <>
      <div className="container">
        <div className="image">
          <img src={LoginBG} alt="" />
        </div>
        <div className="card">
          <div className="innerCard">
            <h1>Log In</h1>
            <div className="email input">
              <p>Email :</p>
              <Input
                placeholder="Enter Your Email"
                data={email}
                setData={setEmail}
              />
            </div>
            <div className="password input">
              <p>Password :</p>
              <Input
                placeholder="Enter Your Password"
                data={password}
                setData={setPassword}
              />
            </div>
            <div className="btn">
              <Button text="Login" onClickFun={fun} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
