import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, DatePicker } from 'antd';
import {Route, Link} from 'react-router-dom'
import SignIn from './Containers/AuthenicationScreens/SignIn'
import SignUp from './Containers/AuthenicationScreens/SignUp'
import { OmitProps } from 'antd/lib/transfer/ListBody';
import Home from './Containers/Home'
function App() {
  return (
    <div className="App">
     <Route exact path='/' component={SignIn}/>
     <Route path='/signUp' exact component={SignUp}/>
     <Route path='/Home' exact component={Home}/>
    </div>
  );

}

export default App;
