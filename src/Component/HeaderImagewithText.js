import React from 'react';
import { Button, DatePicker } from 'antd';
import '../Styles/SignIn.scss';
import flower from '../Assets/flower.png'
 
function HeaderImagewithText(props) {
   let GlobalConst = global.const;
  return (
    <div className="HeaderContainerInner" >
       <div>
       <img className="headerImageText" src={flower} alt="Girl in a jacket" ></img>
       </div>
       
        <div>
        <p className="headerTextglobal">{GlobalConst.HeaderGroup}</p>
         <p className="HeaderGroupText">{GlobalConst.HeaderGroupText}</p>
        </div>
       

    </div>
  );
}

export default HeaderImagewithText;
