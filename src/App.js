import React from 'react';
// import './App.css';
// import './Components/Advice/Advice.css'
// import './Components/Background/Background.css'
// import './Components/Buttons/Buttons.css'
// import './Components/GroupName/GroupName.css'
// import './Components/Header/HeaderLogo.css'
// import './Components/Logo/Logo.css'
import Logo from './Components/Logo/Logo';
import Buttons from './Components/Buttons/Buttons';
import HeaderLogo from './Components/Header/HeaderLogo';
import Background from './Components/Background/Background';
import Advice from './Components/Advice/Advice';
import GroupName from './Components/GroupName/GroupName';
const App = () => {
  return (
    <div>
      <Logo />
      <Buttons />
      <HeaderLogo />
      <Advice />
      <Background />
      <GroupName />
    </div>
  )
}

export default App;
