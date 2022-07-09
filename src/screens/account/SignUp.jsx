import React, {useRef, useState} from "react";
import {Form, Button, Alert, } from "react-bootstrap";
import {useAuth} from "../../context/AuthContext";
import {Link, useNavigate} from "react-router-dom";
import './FormStyle.scss'

const Signup = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const {signup} = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault()

        if(passwordRef.current.value.length < 8){
            return setError("Passwords length must be more then 8 chars");
        } else if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match");
        } else if (emailRef.current.value === '') {
            return setError("Enter email address");
        }

        try {
            setError("");
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value);
            navigate("/login");
        } catch {
            setError("Failed to create an account, enter valid email");
        }

        setLoading(false);
    }

    return (
        <section id="cover" className="min-vh-100">
            <div id="cover-caption">
                <Form onSubmit={handleSubmit} noValidate className='center w-100 p-3'>
                    <h3 className="text-center text-light mb-2">CREATE ACCOUNT</h3>
                    {error && <Alert variant="danger" className='p-2 text-center mb-0'>{error}</Alert>}
                    <Form.Group id="email">
                        <Form.Label className='text-light'>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} placeholder={'Enter email address'}/>
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label className='text-light'>Password</Form.Label>
                        <Form.Control type="password" ref={passwordRef} placeholder={'Enter password'}/>
                    </Form.Group>
                    <Form.Group id="password-confirm">
                        <Form.Label className='text-light'>Password Confirmation</Form.Label>
                        <Form.Control type="password" ref={passwordConfirmRef} placeholder={'Confirm your password'}/>
                    </Form.Group>
                    <Button disabled={loading} className="w-100 mt-3 mb-3" type="submit">
                        Sign Up
                    </Button>
                    <p className="text-center text-light">Already have an account? <Link className='text-light' to="/login">Log In</Link></p>
                </Form>
            </div>
        </section>
    )
}
export default Signup;