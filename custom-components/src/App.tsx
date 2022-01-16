import React from 'react';

import './App.css';
import ButtonPill from './components/Buttons/ButtonPill/ButtonPill';
import ButtonPillNotifications from './components/Buttons/ButtonPillNotications/ButtonPillNotifications';
import CardCarousel from './components/CardCarousel/CardCarousel';
import LoginForm from './components/LoginForm/LoginForm';
import SignUpForm from './components/SignUpForm/SignUpForm';

function App() {
  return (
    <div className="App">
      <ButtonPillNotifications />
    </div>
  );
}

export default App;
