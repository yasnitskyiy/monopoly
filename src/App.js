import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import './App.scss';

import Home from './screens/home/Home';
import SignUp from "./screens/authentication/SignUp";
import PrivateRoute from "./screens/PrivateRoute";
import Login from "./screens/authentication/Login";
import Profile from "./screens/user/profile/Profile";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Settings from "./screens/user/settings/Settings";



const App = () => {

    let location = useLocation();

    return (
        <AuthProvider>
            <div className='d-flex min-vh-100 flex-column'>
                { location.pathname === '/login' || location.pathname === '/signup' ? null : <Header /> }
                <Routes>
                    <Route path="/" element={<PrivateRoute> <Home /> </PrivateRoute>}/>
                    <Route path="/profile" element={<PrivateRoute> <Profile /> </PrivateRoute>}/>
                    <Route path="/settings" element={<PrivateRoute> <Settings /> </PrivateRoute>}/>
                    <Route path="/signup" element={<SignUp />}/>
                    <Route path="/login" element={<Login />}/>
                </Routes>
                { location.pathname === '/login' || location.pathname === '/signup' ? null : <Footer /> }
            </div>
        </AuthProvider>
    );
}

export default App;
