import React from 'react';
import { Button, DatePicker } from 'antd';
import '../Styles/NavBar.scss';
import logo from '../Assets/iqvia-logo-white.png'
import flower from '../Assets/flower.png'
 import PropTypes from "prop-types";
 import SearchBar from '../Component/SearchBar'
function NavBar(props) {
   let GlobalConst = global.const;
  return (
    <div class="topnav" id="myTopnav">
    <img className="image" src={logo}></img>
    <SearchBar/>
    
    </div>
  );
}


export default NavBar;
