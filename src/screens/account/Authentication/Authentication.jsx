import './Authentication.module.scss'
import {NavLink} from "react-router-dom";
import c from "./Authentication.module.scss";


const Authentication = (props) => {
    return (
        <form className={c.form}>
            <h3 >Authentication</h3>

            <label htmlFor="email">Email</label>
            <input type="text" id="email"required/>

            <label htmlFor="password">Password</label>
            <input type="password" id="password" required/>

            <input type="submit" value="Log in"/>
            <p>Don't have an account yet? <NavLink to="/reg">Sign Up</NavLink></p>
        </form>
    )
}

export default Authentication