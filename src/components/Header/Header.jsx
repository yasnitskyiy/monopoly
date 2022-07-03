import c from './Header.module.css'
import cg from '../../App.module.css'
import profileImg from '../../images/Person.jpg'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <div className={c.header}>
            <div className={`${c.headerContent} ${cg.center}`}>
                <div className={c.logo}>
                    <NavLink to="/"><h1>MONOPOLY UA</h1></NavLink>
                </div>
                <div className={c.headerMenu}>
                    <ul>
                        <li className={c.playGame}><NavLink to="/game">PLAY GAME</NavLink></li>
                        <li><NavLink to="/friends">FRIENDS</NavLink></li>
                        <li><NavLink to="/stats">STATS</NavLink></li>
                    </ul>
                    <div className={c.dropdown}>
                        <a href="/"><img src={profileImg} alt="profile-img"/></a>
                        <div className={c.dropdownContent}>
                            <div className={c.userInfo}>
                                <span className={c.userName}>My nick name</span>
                                <img src={profileImg} alt="profile-img"/>
                            </div>
                            <NavLink to="/profile">Profile</NavLink>
                            <NavLink to="/settings">Settings</NavLink>
                            <NavLink to="/">Sign out</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header