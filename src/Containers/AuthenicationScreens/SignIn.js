import React from 'react';
import { Button, DatePicker } from 'antd';
import '../../Styles/SignIn.scss';
import HeaderswithImage from '../../Component/HeaderswithImage'
import HeaderImagewithText from '../../Component/HeaderImagewithText'
import FloatingLabel from '../../Component/FloatingLabel'
function SignIn() {
    let GlobalConst = global.const;
  return (
    <div className="container">
        <HeaderswithImage/>
        <div className="loginStyleBox">
        <div>
        <HeaderImagewithText/>
        </div>
        <div >
        <h2 className="signUpHeader">{GlobalConst.signUpOrganization}</h2>
        <FloatingLabel/>
        </div>
        </div>
       
       
    </div>
    
  );
}

export default SignIn;
