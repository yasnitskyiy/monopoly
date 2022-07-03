import c from '../Authentication/Authentication.module.css'
import {NavLink} from "react-router-dom";

const Registration = (props) => {
    return(
        <form className={c.form}>
            <h3 className={c.hText}>Registration</h3>

            <label className={c.formLabel} htmlFor="username">Username</label>
            <input className={c.formInput} type="text" id="username" required/>

            <label className={c.formLabel} htmlFor="email">Email</label>
            <input className={c.formInput} type="text" id="email" required/>

            <label className={c.formLabel} htmlFor="password">Password</label>
            <input className={c.formInput} type="password" id="password" required/>

            <label className={c.formLabel} htmlFor="repeat_password">Repeat password</label>
            <input className={c.formInput} type="password" id="repeat_password" required/>

            <button className={c.formSubmit} type="submit">Create account</button>
            <p className={c.alreadyText}>Already have an account? <NavLink to="/auth">Log in</NavLink></p>
        </form>
    )
}

export default Registration