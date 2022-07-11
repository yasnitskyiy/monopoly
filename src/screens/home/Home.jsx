import React from "react";

import FeaturesContainer from "../../components/Features/FeaturesContainer";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import {Container} from "react-bootstrap";


const Home = (props) => {
    return (
        <>
            <div className='d-flex min-vh-100 flex-column'>
            <Header/>
            <Container className='flex-grow-1'>
                <FeaturesContainer store={props.store}/>
            </Container>
            <Footer className=''/>
            </div>
        </>
    )
}

export default Home