import Home from "./screens/home/Home";
import Footer from "./components/Footer/Footer";
import {Routes, Route} from "react-router-dom";
import c from './App.module.scss';
import Header from "./components/Header/Header";
import AuthenticationFormikContainer from "./screens/account/AuthenticationFormik/AuthenticationFormikContainer";

const App = () => {
    return (
        <div className={c.container}>
            <Header />

            <div className={`${c.content} ${c.center}`}>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/auth' element={<AuthenticationFormikContainer />} />
                    {/*<Route path='/reg' element={<RegistrationFormik/>} />*/}
                </Routes>
            </div>

            <Footer />
        </div>
    );
}

export default App;
