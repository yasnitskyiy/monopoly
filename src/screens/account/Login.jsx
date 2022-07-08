import React, {useState} from 'react'
import {Form, Formik} from "formik"
import {NavLink, useNavigate} from "react-router-dom"
import {useAuth} from "../../context/AuthContext";

import * as Yup from "yup";

import FormikControl from "../../components/Formik/FormikControl"
import TextError from "../../components/Formik/TextError";
import './FormikFormStyle.scss'


const Login = () => {

    const { login } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    let navigate = useNavigate();

    const initialValues = {
        email: '',
        password: '',
    }
    const validationSchema = Yup.object({
        email: Yup.string().required('Email address is required!'),
        password: Yup.string().required('Password is required!'),
    })
    async function handleSubmit(e) {

        try {
            setError("")
            setLoading(true)
            await login(e.email, e.password)
            navigate("/")
        } catch {
            setError("Login or password are incorrect!")
        }
        setLoading(false)
    }

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
            { formik =>
                (
                    <Form>
                        <h3>LOG IN</h3>
                        {error && <TextError>{error}</TextError>}
                        <FormikControl control='input' type='email' label='Email' name='email' />
                        <FormikControl control='input' type='password' label='Password' name='password' />
                        <button disabled={loading} type='submit'>Log In</button>
                        <p>Need an account? <NavLink to="/signup">Sign Up</NavLink></p>
                    </Form>
                )
            }
        </Formik>
    );
};

export default Login;