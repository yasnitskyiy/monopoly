import React, {useRef, useState} from "react";
import {Form, Button, Alert, } from "react-bootstrap";
import {useAuth} from "../../context/AuthContext";
import {Link, useNavigate} from "react-router-dom";

const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const {login} = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

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
            navigate("/");
        } catch {
            setError("Incorrect password or email");
        }

        setLoading(false);
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
                    <p className="text-center text-light">Need an account? <Link className='text-light' to="/signup">Sign Up</Link></p>
                </Form>
            </div>
        </section>
    )
}
export default Login;



// import React, {useState} from 'react'
// import {Button, Card, Form} from "react-bootstrap";
//
// import {Formik} from "formik"
// import {NavLink, useNavigate} from "react-router-dom"
// import {useAuth} from "../../context/AuthContext";
//
// import * as Yup from "yup";
//
// import FormikControl from "../../components/Formik/FormikControl"
// import TextError from "../../components/Formik/TextError";
// import './FormStyle.scss'
//
//
// const Login = () => {
//
//     const {login} = useAuth()
//     const [error, setError] = useState("")
//     const [loading, setLoading] = useState(false)
//     let navigate = useNavigate();
//
//     const initialValues = {
//         email: '',
//         password: '',
//     }
//     const validationSchema = Yup.object({
//         email: Yup.string().required('Email address is required!'),
//         password: Yup.string().required('Password is required!'),
//     })
//
//     async function handleSubmit(e) {
//         e.preventDefault()
//
//         try {
//             setError("")
//             setLoading(true)
//             await login(e.email, e.password)
//             navigate("/")
//         } catch {
//             setError("Login or password are incorrect!")
//         }
//         setLoading(false)
//     }
//
//     return (
//         <section id="cover" className="min-vh-100">
//             <div id="cover-caption">
//                 <Formik initialValues={initialValues} validationSchema={validationSchema}>
//                     {formik =>
//                         (
//                             <Form noValidate onSubmit={handleSubmit} className="center w-100">
//                                 <h5 className="text-center text-light">LOG IN</h5>
//                                 <Form.Label>
//                                     {error && <TextError>{error}</TextError>}
//                                 </Form.Label>
//                                 <FormikControl control='input' type='email' label='Email' name='email'
//                                                placeholder={'Enter your email'}/>
//
//                                 <FormikControl control='input' type='password' label='Password' name='password'
//                                                placeholder={'Enter your password'}/>
//
//                                 <Button disabled={loading} variant="primary" type="submit"
//                                         className="w-100 mt-3 mb-3"> Log In </Button>
//
//                                 <p className="text-center text-light">Need an account? <NavLink className='text-light' to="/signup">Sign
//                                     Up</NavLink></p>
//                             </Form>
//                         )
//                     }
//                 </Formik>
//             </div>
//         </section>
//     );
// };
//
// export default Login;