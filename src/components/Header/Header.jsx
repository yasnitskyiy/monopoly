import './Header.scss'
import '../../App.scss'
import {NavLink} from "react-router-dom";
import UserMenuContainer from "../../screens/userMenu/UserMenuContainer";

const Header = (props) => {
    return (
        <div className={'header'}>
            <div className={`headerContent center`}>
                <div>
                    <NavLink to="/"><h1>MONOPOLY UA</h1></NavLink>
                </div>

                <UserMenuContainer />

            </div>
        </div>
    )
}

export default Header