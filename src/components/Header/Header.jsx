import c from './Header.module.scss'
import cg from '../../App.module.scss'
import {NavLink} from "react-router-dom";
import UserMenuContainer from "../../screens/userMenu/UserMenuContainer";

const Header = (props) => {
    return (
        <div className={c.header}>
            <div className={`${c.headerContent} ${cg.center}`}>
                <div>
                    <NavLink to="/"><h1>MONOPOLY UA</h1></NavLink>
                </div>

                <UserMenuContainer />

            </div>
        </div>
    )
}

export default Header