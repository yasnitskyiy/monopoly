import React, {useRef, useState, useEffect} from "react";
import {Form, Button, Alert, } from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import {useAuth} from "../../context/AuthContext";

import { useDispatch } from "react-redux";
import { loginGetUserData } from "../../features/user";
import { collection, getDocs } from "@firebase/firestore";
import { db } from "../../firebase";

const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const { getUserUID } = useAuth();



    // const getUsers = async () => {
    //     let arr = [];
    //     const data = await getDocs(usersCollectionRef);
    //     data.forEach(doc => {
    //         arr.push(doc.data());
    //     })
    //     return arr;
    // }
    // useEffect(() => {
    //     const getUsers = async () => {
    //         const data = await getDocs(userCollectionRef);
    //         return data.docs.map((doc) => ({...doc.data(), id: doc.id}));
    // })

    async function handleSubmit(e) {
        e.preventDefault();
        if (emailRef.current.value === '') {
            return setError("Enter email address");
        } else if (passwordRef.current.value === '') {
            return setError("Enter password");
        } else if(passwordRef.current.value.length < 8){
            return setError("Passwords length must be more then 8 chars");
        }

        try {
            setError("");
            setLoading(true);
            await login(emailRef.current.value, passwordRef.current.value);
            await dispatch(loginGetUserData());
            setLoading(false);
            navigate("/");
        } catch {
            setError("Incorrect email or password");
        }

    }
    return (
        <section id="cover" className="min-vh-100">
            <div id="cover-caption">
                <Form onSubmit={handleSubmit} noValidate className='center w-100 p-3'>
                    <h3 className="text-center text-light mb-2">LOG IN</h3>
                    {error && <Alert variant="danger" className='p-2 text-center mb-0'>{error}</Alert>}
                    <Form.Group id="email">
                        <Form.Label className='text-light'>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} placeholder={'Enter email address'}/>
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label className='text-light'>Password</Form.Label>
                        <Form.Control type="password" ref={passwordRef} placeholder={'Enter password'}/>
                    </Form.Group>
                    <Button disabled={loading} className="w-100 mt-3 mb-3" type="submit">
                        Log In
                    </Button>
                    <p className="text-center text-light">Need an account? <Link className='text-light' to="/signup" >Sign Up</Link></p>
                </Form>
            </div>
        </section>
    )
}
export default Login;