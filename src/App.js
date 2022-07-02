import c from './App.module.css';
import profileImg from './images/Person.jpg'
import templateFeatures from './images/template.png'

const App = () => {
    return (
        <div className={c.container}>
            <div className={c.header}>
                <div className={`${c.headerContent} ${c.center}`}>
                    <div className={c.logo}>
                        <h1>MONOPOLY UA</h1>
                    </div>
                    <div className={c.headerMenu}>
                        <ul>
                            <li className={c.game}>PLAY GAME</li>
                            <li>FRIENDS</li>
                            <li>STATS</li>
                        </ul>
                        <div className={c.dropdown}>
                            <a href="/" className={c.showMenu}><img src={profileImg} alt="profile-img"/></a>
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

            <div className={`${c.content} ${c.center}`}>
                <div className={c.features}>
                    <div className={c.gridItem}>
                        <img src={templateFeatures} alt="templateFeatures"/>
                        <h2>FREE TO PLAY</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur eveniet in nesciunt nostrum officia, ut? Animi cum eaque earum eum ipsum, laboriosam omnis praesentium reiciendis sequi sint sit tempore unde.</p>
                    </div>
                    <div className={c.gridItem}>
                        <img src={templateFeatures} alt="templateFeatures"/>
                        <h2>NEW COMMUNICATIONS</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur eveniet in nesciunt nostrum officia, ut? Animi cum eaque earum eum ipsum, laboriosam omnis praesentium reiciendis sequi sint sit tempore unde.</p>
                    </div>
                    <div className={c.gridItem}>
                        <img src={templateFeatures} alt="templateFeatures"/>
                        <h2>COMPETITION WITH OTHERS</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur eveniet in nesciunt nostrum officia, ut? Animi cum eaque earum eum ipsum, laboriosam omnis praesentium reiciendis sequi sint sit tempore unde.</p>
                    </div>
                </div>
            </div>

            <div className={`${c.footer}`}>
                <div className={`${c.center}`}>

                </div>
            </div>
        </div>
    );
}

export default App;
