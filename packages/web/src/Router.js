import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";

export default function Routers() {
    return (
        <Routes>
            <Route path='/' exact element={ <Home/> }/>
            <Route path='/sign-in' element={ <SignIn/> }/>
        </Routes>
    );
}
