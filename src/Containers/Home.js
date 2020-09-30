import React, { useState } from 'react';
import '../Styles/Home.scss';
import { useHistory } from 'react-router-dom';
import NavBar from '../Component/NavBar'
function Home() {
    const history = useHistory()
  return (
              <NavBar/> 
      
  );
}

export default Home;
