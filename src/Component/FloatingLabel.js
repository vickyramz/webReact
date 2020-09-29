import React from 'react';
import { Button, DatePicker } from 'antd';
import '../Styles/SignIn.scss';
import flower from '../Assets/flower.png'
 import PropTypes from "prop-types";
function FloatingLabel(props) {
   let GlobalConst = global.const;
  return (
    <div>
    <div class="input-group">
    <input onChange={(text)=>props.TextChange(text)} type="text" required></input>
    <span class="highlight"></span>
    <span class="bar"></span>
    <label>{props.PlaceHolder}</label>
   {props.icons!='' && props.icons!=null? <img className="passwordIcons"  src={props.icons} alt="" ></img>:null} 
  </div>

  </div>
  );
}
FloatingLabel.propTypes = {
  onChange: PropTypes.func.isRequired,
  PlaceHolder:PropTypes.string.isRequired,
  icons:PropTypes.string
};

export default FloatingLabel;
