import React from 'react';
import {NavLink} from "react-router-dom";
import c from './UserMenu.module.scss'

const UserMenu = (props) => {
    let element = (props.authorized) ? (
            <div className={c.headerMenu}>
                <ul>
                    <NavLink to="/game">
                        <li className={c.primaryButton}>PLAY GAME</li>
                    </NavLink>
                    <NavLink to="/friends">
                        <li>FRIENDS</li>
                    </NavLink>
                    <NavLink to="/stats">
                        <li>STATS</li>
                    </NavLink>
                </ul>
                <div className={c.dropdown}>
                    <img src={props.profileImage} alt="profile-img"/>
                    <div className={c.dropdownContent}>
                        <div className={c.userInfo}>
                            <span>{props.nickname}</span>
                        </div>
                        <NavLink to="/profile">Profile</NavLink>
                        <NavLink to="/settings">Settings</NavLink>
                        <NavLink to="/" onClick={props.signOut}>Sign out</NavLink>
                    </div>
                </div>
            </div>
        ) :
        (
            <div className={c.headerMenu}>
                <ul>
                    <NavLink to="/auth">
                        <li className={c.primaryButton}>SIGN IN</li>
                    </NavLink>
                </ul>
            </div>
        )


    return (
        <div>
            {element}
        </div>
    );
};

export default UserMenu;