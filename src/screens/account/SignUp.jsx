import React, {useState,} from 'react'
import {Form, Formik} from "formik"
import FormikControl from "../../components/Formik/FormikControl"
import './FormikFormStyle.scss'
import {NavLink, useNavigate} from "react-router-dom"
import * as Yup from "yup";
import {useAuth} from "../../context/AuthContext";
import TextError from "../../components/Formik/TextError";


const SignUp = (props) => {

    const { signup } = useAuth()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    let navigate = useNavigate();
    // const history = useHistory()

    const initialValues = {
        email: '',
        password: '',
        passwordConfirmation: ''
    }

    const validationSchema = Yup.object({
        email: Yup.string()
            .email('Ivalid email format')
            .required('Email address is required!'),
        password: Yup.string()
            .required('Password is required!')
            .min(7, 'Password length should be 7 chars minimum.'),
        passwordConfirmation: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Password is required!')
    })
    async function handleSubmit(e) {

        try {
            setError("")
            setLoading(true)
            await signup(e.email, e.password)
            navigate("/login")
        } catch {
            setError("Failed! Incorrect e-mail or might be already used!")
        }

        setLoading(false)
    }

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
            { formik =>
                (
                    <Form>
                        <h3>CREATE ACCOUNT</h3>
                        {error && <TextError>{error}</TextError>}
                        <FormikControl control='input' type='email' label='Email' name='email' />
                        <FormikControl control='input' type='password' label='Password' name='password' />
                        <FormikControl control='input' type='password' label='Confirm password' name='passwordConfirmation' />

                        <button disabled={loading} type='submit'>Create account</button>
                        <p>Already have an account? <NavLink to="/login">Log In</NavLink></p>
                    </Form>
                )
            }
        </Formik>
    );
};

export default SignUp;