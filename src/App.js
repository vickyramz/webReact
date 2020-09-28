import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, DatePicker } from 'antd';
import {Route, Link} from 'react-router-dom'
import SignIn from './Containers/AuthenicationScreens/SignIn'
import { OmitProps } from 'antd/lib/transfer/ListBody';
function App() {
  return (
    <div className="App">
     <Route path='/' component={SignIn}/>
    </div>
  );

}

export default App;
