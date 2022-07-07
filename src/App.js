import Home from "./screens/home/Home";
import Footer from "./components/Footer/Footer";
import AuthenticationFormik from "./screens/account/AuthenticationFormik/AuthenticationFormik";
import {Routes, Route} from "react-router-dom";
import c from './App.module.scss';
import HeaderContainer from "./components/Header/HeaderContainer";
import RegistrationFormik from "./screens/account/RegistrationForm/RegistrationFormik";


const App = () => {
    return (
        <div className={c.container}>
            <HeaderContainer />

            <div className={`${c.content} ${c.center}`}>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/auth' element={<AuthenticationFormik />} />
                    <Route path='/reg' element={<RegistrationFormik />} />
                </Routes>
            </div>

            <Footer />
        </div>
    );
}

export default App;
