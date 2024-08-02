import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Router, useLocation } from 'react-router-dom';
import Routes from './routes';
import { SidebarProvider } from '../src/context/SidebarContext';
import { Provider } from 'react-redux';
import { store } from '../src/app/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <BrowserRouter>
        <SidebarProvider>
          <Routes />
          <ToastContainer autoClose={2000} />
        </SidebarProvider>
      </BrowserRouter>
  )
}

export default App
