import React from "react";
import {Routes, Route} from "react-router-dom";
import {AuthProvider} from "./context/AuthContext";

import './App.scss';

import Home from './screens/home/Home';
import SignUp from "./screens/account/SignUp";
import PrivateRoute from "./screens/PrivateRoute";
import Login from "./screens/account/Login";

const App = () => {
    return (
        <div>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<PrivateRoute> <Home /> </PrivateRoute>}/>
                    <Route path="/signup" element={<SignUp/>}/>
                    <Route path="/login" element={<Login />}/>
                </Routes>
            </AuthProvider>
        </div>
    );
}

export default App;
