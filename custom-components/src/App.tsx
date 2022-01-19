import React from 'react';

import './App.css';
import ButtonPill from './components/Buttons/ButtonPill/ButtonPill';
import ButtonPillNotifications from './components/Buttons/ButtonPillNotications/ButtonPillNotifications';
import CardCarousel from './components/CardCarousel/CardCarousel';
import LoginForm from './components/LoginForm/LoginForm';
import MobileMenu from './components/Menus/MobileMenu/MobileMenu';
import SignUpForm from './components/SignUpForm/SignUpForm';
import Table from './components/Tables/Table/Table';

function App() {
  return (
    <div className="App">
      <MobileMenu />
    </div>
  );
}

export default App;
