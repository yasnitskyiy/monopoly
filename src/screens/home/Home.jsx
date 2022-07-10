import FeaturesContainer from "../../components/Features/FeaturesContainer";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import {Container} from "react-bootstrap";

const Home = (props) => {
    return (
        <>
            <Header/>
            <Container>
                <FeaturesContainer store={props.store}/>
            </Container>
            <Footer className='mt-auto'/>
        </>
    )
}

export default Home