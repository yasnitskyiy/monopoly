import React from 'react';
import {Formik, Form} from "formik";
import * as Yup from 'yup'

function RegistrationForm(props) {
    return (
        <div>

        </div>
    );
}

export default RegistrationForm;

// import {useFormik} from 'formik'
// import c from "../Authentication/Authentication.module.scss";
// import {NavLink} from "react-router-dom";
//
// const initialValues = {
//     name: '',
//     email: '',
//     chanel: '',
// }
//
// const  onSubmit = (values) => {
//     console.log(values)
// }
//
// const validate = (values) => {
//     let errors = {}
//
//     if(!values.names){
//         errors.name = 'Required'
//     }
//
//     if(!values.email){
//         errors.email = 'Required'
//     }
//     else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
//         errors.email = 'Invalid email format!'
//     }
//
//     if(!values.chanel){
//         errors.chanel = 'Required'
//     }
//
//     return errors
// }
//
// const RegistrationForm = (props) => {
//
//     const formik = useFormik({
//         initialValues,
//         onSubmit,
//         validate,
//     })
//
//     return (
//         <div>
//             <form className={c.form} onSubmit={formik.handleSubmit}>
//                 <h3 className={c.hText}>Authentication</h3>
//
//                 <label className={c.formLabel} htmlFor="email">Email</label>
//                 <input className={c.formInput} type="text" id="email" name="email" onChange={formik.handleChange} value={formik.values.name} required/>
//
//                 <label className={c.formLabel} htmlFor="password">Password</label>
//                 <input className={c.formInput} type="password" id="password" name="password" onChange={formik.handleChange} value={formik.values.password} required/>
//
//                 <button className={c.formSubmit} type="submit">Log in</button>
//                 <p className={c.alreadyText}>Don't have an account yet? <NavLink to="/reg">Sign Up</NavLink></p>
//             </form>
//         </div>
//     );
// }
//
// export default RegistrationForm;