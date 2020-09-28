import React from 'react';
import { Button, DatePicker } from 'antd';
import '../Styles/SignIn.scss';
import logo from '../Assets/logo.png'
 
function HeaderswithImage(props) {
   let GlobalConst = global.const;
  return (
    <div className="HeaderContainer" >
       <img className="headerImage" src={logo} alt="Girl in a jacket" ></img>
       <h1 className="headerText">{GlobalConst.Header}</h1>
    </div>
  );
}

export default HeaderswithImage;
