import React from 'react';
import './App.css'
import AboutComp from './Components/AboutComp';
import FooterComp from './Components/FooterComp';
import FormComp from './Components/FormComp';
import HeadComp from './Components/HeadComp';
import NavbarComp from './Components/NavbarComp';
import SkillsComp from './Components/SkillsComp';

function App() {
  return (
    <div className="App">
      <NavbarComp/>
      <HeadComp/>
      <AboutComp/>
      <SkillsComp/>
      <FormComp/>
      <FooterComp/>
    </div>
  );
}

export default App;
