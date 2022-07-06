import c from './Header.module.scss'
import cg from '../../App.module.scss'
import profileImg from '../../images/Person.jpg'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <div className={c.header}>
            <div className={`${c.headerContent} ${cg.center}`}>
                <div>
                    <NavLink to="/"><h1>MONOPOLY UA</h1></NavLink>
                </div>
                <div className={c.headerMenu}>
                    <ul>
                        <NavLink to="/game"><li className={c.playGame}>PLAY GAME</li></NavLink>
                        <NavLink to="/friends"><li>FRIENDS</li></NavLink>
                        <NavLink to="/stats"><li>STATS</li></NavLink>
                    </ul>
                    <div className={c.dropdown}>
                        <img src={profileImg} alt="profile-img"/>
                        <div className={c.dropdownContent}>
                            <div className={c.userInfo}>
                                <span>My nick name</span>
                                <img src={profileImg} alt="profile-img"/>
                            </div>
                            <NavLink to="/profile">Profile</NavLink>
                            <NavLink to="/settings">Settings</NavLink>
                            <NavLink to="/auth">Sign out</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header