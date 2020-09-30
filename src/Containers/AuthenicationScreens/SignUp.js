import React, { useState } from 'react';
import { Button, DatePicker } from 'antd';
import '../../Styles/SignIn.scss';
import HeaderswithImage from '../../Component/HeaderswithImage'
import HeaderImagewithText from '../../Component/HeaderImagewithText'
import FloatingLabel from '../../Component/FloatingLabel'
import passwrd from '../../Assets/passwrd.png'
import CustomButton from '../../Component/CustomButton'
import { Redirect, Link, useHistory } from 'react-router-dom';
function SignUp(props) {
    let GlobalConst = global.const;
    const [Email,setEmail]=useState('')
    const [NewPassword,setNewPassword]=useState('')
    const [ConfirmPassword,setConfirmPassword]=useState('')
    const history = useHistory()
    function RedirectToSignIn(){
      history.push('/')  
    }
  return (
    <div className="container">
        <HeaderswithImage/>
        <div className="loginStyleBox">
        <div>
        <HeaderImagewithText/>
        </div>
        <div >
        <h2 className="signUpHeader">{GlobalConst.signUpOrganization}</h2>
        <FloatingLabel  PlaceHolder={GlobalConst.Email} TextChange={(text)=>setEmail(text)}/>
        <FloatingLabel PlaceHolder={GlobalConst.NewPassword} icons={passwrd} TextChange={(text)=>setNewPassword(text)}/>
        <FloatingLabel PlaceHolder={GlobalConst.ConfirmPassword} icons={passwrd} TextChange={(text)=>setConfirmPassword(text)}/>
        </div>
        <div>
       <CustomButton onClick={()=>RedirectToSignIn()}  title={GlobalConst.signUpButton}/>
         <p className="SignUpRedirection" onClick={()=>RedirectToSignIn()}>{GlobalConst.SignUpRedirection}</p>
        </div>
        </div>
       
       
    </div>
    
  );
}

export default SignUp;
