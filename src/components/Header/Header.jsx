import c from './Header.module.css'
import cg from '../../App.module.css'
import profileImg from '../../images/Person.jpg'

const Header = (props) => {
    return (
        <div className={c.header}>
            <div className={`${c.headerContent} ${cg.center}`}>
                <div className={c.logo}>
                    <h1>MONOPOLY UA</h1>
                </div>
                <div className={c.headerMenu}>
                    <ul>
                        <li className={c.playGame}>PLAY GAME</li>
                        <li>FRIENDS</li>
                        <li>STATS</li>
                    </ul>
                    <div className={c.dropdown}>
                        <a href="/"><img src={profileImg} alt="profile-img"/></a>
                        <div className={c.dropdownContent}>
                            <div className={c.userInfo}>
                                <span className={c.userName}>My nick name</span>
                                <img src={profileImg} alt="profile-img"/>
                            </div>
                            <a href="/">Profile</a>
                            <a href="/">Settings</a>
                            <a href="/">Sign out</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header