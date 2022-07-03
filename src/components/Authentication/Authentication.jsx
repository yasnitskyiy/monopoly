import './Authentication.module.css'
import {NavLink} from "react-router-dom";
import c from "./Authentication.module.css";

const Authentication = (props) => {
    return (
        <form className={c.form}>
            <h3 className={c.hText}>Authentication</h3>

            <label className={c.formLabel} htmlFor="email">Email</label>
            <input className={c.formInput} type="text" id="email"/>

            <label className={c.formLabel} htmlFor="password">Password</label>
            <input className={c.formInput} type="password" id="password"/>

            <button className={c.formSubmit} type="submit">Log in</button>
            <p className={c.alreadyText}>Don't have an account yet? <NavLink to="/reg">Sign Up</NavLink></p>
        </form>
    )
}

export default Authentication