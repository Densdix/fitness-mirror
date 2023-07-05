import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="text-center min-h-[100vh] flex flex-col">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
