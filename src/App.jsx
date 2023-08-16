import { useState } from 'react'
import './App.css'
import { Router } from 'react-router-dom';
import AuthLogin from './pages/Auth/AuthLogin';
import AuthRegister from './pages/Auth/AuthRegister';

function App() {
  return (
    <Router>
      <div>
        <section>
          <Routes>
            <Route path="/AuthLogin" element = {<AuthLogin /> } />
            <Route path="/AuthRegister" element = { <AuthRegister /> } />
          </Routes>
        </section>
      </div>
    </Router>
  );
}

export default App
