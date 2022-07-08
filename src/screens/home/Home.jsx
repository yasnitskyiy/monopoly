import FeaturesContainer from "../../components/Features/FeaturesContainer";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import './Home.scss';

const Home = (props) => {
    return (
        <div className={'container'}>
            <Header/>
            <div className={`content center`}>
                <FeaturesContainer store={props.store}/>
            </div>
            <Footer/>
        </div>
    )
}

export default Home