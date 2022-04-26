import React from 'react'
import NavBar from '../components/NavBar';
import {
    BrowserRouter,
    Routes ,
    Route
  } from "react-router-dom";
import App from '../containers/App';

const Router = () => {
  return (
    <BrowserRouter>
        <NavBar></NavBar>
        <Routes >
            <Route path="/" exact element={<App />} >
            </Route>
            
        </Routes>
    </BrowserRouter>
  )
}

export default Router;