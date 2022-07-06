import Home from "./screens/home/Home";
import Footer from "./components/Footer/Footer";
import Authentication from "./screens/account/Authentication/Authentication";
import {Routes, Route} from "react-router-dom";
import c from './App.module.scss';
import Registration from "./screens/account/Registration/Registration";
import HeaderContainer from "./components/Header/HeaderContainer";


const App = () => {
    return (
        <div className={c.container}>
            <HeaderContainer />

            <div className={`${c.content} ${c.center}`}>
                <Routes>
                    <Route  path='/' element={<Home />} />
                    <Route  path='/auth' element={<Authentication />} />
                    <Route  path='/reg' element={<Registration />} />
                </Routes>
            </div>

            <Footer />
        </div>
    );
}

export default App;
