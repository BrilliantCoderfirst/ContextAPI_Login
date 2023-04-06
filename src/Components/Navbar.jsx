import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import { DataTransferContext } from '../App';

const Navbar = () => {

  const navigate = useNavigate();
  const {name} = useContext(DataTransferContext);

  function fun() {
    navigate("/ContextAPI_Login/");
  }
  return (
    <>
      <nav className="navbar">

        <div className="logo">
          <h3>Company Logo</h3>
        </div>

        <div className="tabs">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Career</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="profileName">
          <img src="https://p.kindpng.com/picc/s/497-4973038_profile-picture-circle-png-transparent-png.png" alt="" />
          <p>{name}</p>
          <Button text="Log Out" onClickFun={fun}/>
        </div>

      </nav> 
    </>
  )
}

export default Navbar