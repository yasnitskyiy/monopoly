import c from '../Authentication/Authentication.module.scss'
import {NavLink} from "react-router-dom";

const Registration = (props) => {
    return(
        <form className={c.form}>
            <h3 >Registration</h3>

            <label htmlFor="username">Username</label>
            <input type="text" id="username" required/>

            <label htmlFor="email">Email</label>
            <input type="text" id="email" required/>

            <label htmlFor="password">Password</label>
            <input type="password" id="password" required/>

            <label htmlFor="repeat_password">Repeat password</label>
            <input type="password" id="repeat_password" required/>

            <input type="submit" value="Create account"/>
            <p>Already have an account? <NavLink to="/auth">Log in</NavLink></p>
        </form>
    )
}

export default Registration