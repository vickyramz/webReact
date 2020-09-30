import React from 'react';
import { Button, DatePicker } from 'antd';
import '../Styles/NavBar.scss';
import search from '../Assets/ico-search.png'
import flower from '../Assets/flower.png'
 import PropTypes from "prop-types";
function SearchBar(props) {
   let GlobalConst = global.const;
  return (
    <div class="searchBar">
  <input type="text" placeholder="Search Products here" className="searchBarInput"></input>
  <img className="Searchimage" src={search}></img>
    </div>
  );
}


export default SearchBar;
