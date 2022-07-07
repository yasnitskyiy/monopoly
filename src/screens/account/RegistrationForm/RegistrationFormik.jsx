import React from 'react';
import { Form, Formik } from "formik";
import FormikControl from "../../../components/Formik/FormikControl";
import '../FormikFormStyle.scss'
import { NavLink } from "react-router-dom";

const RegistrationFormik = (props) => {
    return (
        <Formik initialValues={props.initialValues} validationSchema={props.validationSchema} onSubmit={props.onSubmit}>
            { formik =>
                (
                    <Form>
                        <h3>REGISTRATION</h3>
                        <FormikControl control='input' type='text' label='Nickname' name='nickname' />
                        <FormikControl control='input' type='email' label='Email' name='email' />
                        <FormikControl control='input' type='password' label='Password' name='password' />
                        <FormikControl control='input' type='password' label='Repeat password' name='re_password' />
                        <button type='submit'>Create account</button>
                        <p>Already have an account? <NavLink to="/auth">Sign Up</NavLink></p>
                    </Form>
                )
            }
        </Formik>
    );
};

export default RegistrationFormik;