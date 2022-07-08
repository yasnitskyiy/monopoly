import React from 'react';
import {NavLink} from "react-router-dom";
import './UserMenu.scss'
import {useAuth} from "../../context/AuthContext";

const UserMenu = (props) => {

    const { logout } = useAuth()

    function acc_logout (){
        logout()
    }

    return (
        <div className={'headerMenu'}>
            <ul>
                <NavLink to="/game">
                    <li className={'primaryButton'}>PLAY GAME</li>
                </NavLink>
                <NavLink to="/friends">
                    <li>FRIENDS</li>
                </NavLink>
                <NavLink to="/stats">
                    <li>STATS</li>
                </NavLink>
            </ul>
            <div className={'dropdown'}>
                <img src={props.profileImage} alt="profile-img"/>
                <div className={'dropdownContent'}>
                    <div className={'userInfo'}>
                        <span>{props.nickname}</span>
                    </div>
                    <NavLink to="/profile">Profile</NavLink>
                    <NavLink to="/settings">Settings</NavLink>
                    <NavLink to="/" onClick={acc_logout}>Sign out</NavLink>
                </div>
            </div>
        </div>
    );
};

export default UserMenu;