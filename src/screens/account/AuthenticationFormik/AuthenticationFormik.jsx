import React from 'react'
import {Form, Formik} from "formik"
import FormikControl from "../../../components/Formik/FormikControl"
import '../FormikFormStyle.scss'
import {NavLink} from "react-router-dom"
import * as Yup from "yup";

const AuthenticationFormik = (props) => {
    const initialValues = {
        email: '',
        password: '',
    }
    const validationSchema = Yup.object({
        email: Yup.string().required('Email address is required!'),
        password: Yup.string().required('Password is required!'),
    })
    const onSubmit = (values) => {
        props.userAuth(values.email, values.password)
    }

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            { formik =>
                (
                    <Form>
                        <h3>AUTHENTICATION</h3>
                        <FormikControl control='input' type='email' label='Email' name='email'/>
                        <FormikControl control='input' type='password' label='Password' name='password'/>
                        <button type='submit' disabled={!formik.isValid}>Log in</button>
                        <p>Don't have an account yet? <NavLink to="/reg">Sign Up</NavLink></p>
                    </Form>
                )
            }
        </Formik>
    );
};

export default AuthenticationFormik;