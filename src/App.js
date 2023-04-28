import './App.css';
import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';

import Home from './pages/Home';
import Single from './pages/single';
import Search from './pages/search';
import Admin from './pages/Admin';
import Form from './pages/Form';
import UpdateForm from './pages/UpdateForm';
import Error404 from './pages/Error404';
import Header from './components/Header';

function App() {

  const { theme } = useContext(ThemeContext);

  return (
      <div className={`App ${theme === 'dark' ? 'dark' : ''} 
      `}>
        <ToastContainer />
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/offers/:id" element={<Single />} />
            <Route path="/search" element={<Search />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/form" element={<Form />} />
            <Route path="/update/:id" element={<UpdateForm />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </Router>
      </div>
  );
}


export default App;