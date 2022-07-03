import c from './App.module.css';

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";

const App = () => {
    return (
        <div className={c.container}>
            <Header />

            <Home />

            <Footer />
        </div>
    );
}

export default App;
