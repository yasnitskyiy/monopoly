import React from 'react'
import * as Yup from 'yup'
import {Form, Formik} from "formik"
import FormikControl from "../../../components/Formik/FormikControl"
import '../FormikFormStyle.scss'
import {NavLink} from "react-router-dom"

const AuthenticationFormik = () => {
    const initialValues = {
        email: '',
        password: '',
        re_password: '',
        nickname: '',
    }
    const validationSchema = Yup.object({
        email: Yup.string().required('Email address is required!'),
        password: Yup.string().required('Password is required!'),
        re_password: Yup.string().required('Repeat your password please!'),
        nickname: Yup.string().required('Nickname is required!'),
    })
    const onSubmit = (values) => console.log('Form data', values)

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            { formik =>
                (
                    <Form>
                        <h3>AUTHENTICATION</h3>
                        <FormikControl control='input' type='email' label='Email' name='email' />
                        <FormikControl control='input' type='password' label='Password' name='password' />
                        <button type='submit'>Log in</button>
                        <p>Don't have an account yet? <NavLink to="/reg">Sign Up</NavLink></p>
                    </Form>
                )
            }
        </Formik>
    );
};

export default AuthenticationFormik;