import React from 'react'
import logo from './logo.svg';
import './App.css';
import Aos from 'aos';
import'aos/dist/aos.css';


import {Landing} from './Components/Home/Landing'
function App() {
  React.useEffect(() => {
    Aos.init({
      duration:1000
    });
  }, [])
  return (
      <Landing/>
  );
}

export default App;
