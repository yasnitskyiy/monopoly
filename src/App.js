import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Authentication from "./components/Authentication/Authentication";

import {Routes, Route} from "react-router-dom";
import c from './App.module.css';
import Registration from "./components/Registration/Registration";


const App = () => {
    return (
        <div className={c.container}>
            <Header />

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
