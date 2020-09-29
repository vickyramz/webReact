import React from 'react';
import { Button, DatePicker } from 'antd';
import '../Styles/SignIn.scss';
import flower from '../Assets/flower.png'
 import PropTypes from "prop-types";
function CustomButton(props) {
   let GlobalConst = global.const;
  return (
    <div>
     <button   
        onClick={()=>props.onClick()}
          className="CustomButton"
          type="submit"
        >{props.title}</button>
  </div>
  );
}
CustomButton.propTypes = {
    title:PropTypes.string.isRequired,
    onClick:PropTypes.func.isRequired
};

export default CustomButton;
