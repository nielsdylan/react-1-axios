import React from 'react'
import NavBar from '../components/NavBar';
import NewMotorcycle from '../containers/NewMotorcycle';
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
            <Route path="/" exact element={<App />} />
            <Route path="/new" exact element={<NewMotorcycle />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router;