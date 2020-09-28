import React from 'react';
import { Button, DatePicker } from 'antd';
import '../Styles/SignIn.scss';
import logo from '../Assets/logo.png'
function HeaderswithImage() {
  return (
    <div className="container">
       <img className="headerImage" src={logo} alt="Girl in a jacket" ></img>
    </div>
  );
}

export default HeaderswithImage;
