import React from 'react';
import * as Yup from 'yup'
import {Form, Formik} from "formik";
import FormikControl from "./FormikControl";

const FormikContainer = () => {
    const initialValues = {
        email: ''
    }

    const validationSchema = Yup.object({})
    const onSubmit = (values) => console.log('Form data', values)
    return (
        <Formik initialValues={initialValues} validationShema={validationSchema} onSubmit={onSubmit}>
            { formik =>
                (
                    <Form>
                        <FormikControl control='input' type='email' label='Email' name='email' />
                        <button type='submit'>Submit</button>
                    </Form>
                )
            }
        </Formik>
    );
};

export default FormikContainer;