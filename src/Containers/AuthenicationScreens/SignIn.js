import React, { useState } from 'react';
import { Button, DatePicker } from 'antd';
import '../../Styles/SignIn.scss';
import HeaderswithImage from '../../Component/HeaderswithImage'
import HeaderImagewithText from '../../Component/HeaderImagewithText'
import FloatingLabel from '../../Component/FloatingLabel'
import passwrd from '../../Assets/passwrd.png'
import CustomButton from '../../Component/CustomButton'
import { Redirect, Link, useHistory } from 'react-router-dom';
function SignIn(props) {
    let GlobalConst = global.const;
    const [Email,setEmail]=useState('')
    const [Password,setPassword]=useState('')
    const history = useHistory()
    function RedirectToSignIn(){
      history.push('/Home')  
    }
  return (
    <div className="container">
        <HeaderswithImage/>
        <div className="loginStyleBox">
        <div>
        <HeaderImagewithText/>
        </div>
        <div >
        <h2 className="signUpHeader">{GlobalConst.SingIn}</h2>
        <FloatingLabel  PlaceHolder={GlobalConst.Email} TextChange={(text)=>setEmail(text)}/>
        <FloatingLabel PlaceHolder={GlobalConst.Password} icons={passwrd} TextChange={(text)=>setPassword(text)}/>
        </div>
        <div>
       <CustomButton  onClick={()=>RedirectToSignIn()}  title={GlobalConst.signInButton}/>
         <p className="SignUpRedirection" >{GlobalConst.SignUpRedirection}</p>
        </div>
        </div>
       
       
    </div>
    
  );
}

export default SignIn;
