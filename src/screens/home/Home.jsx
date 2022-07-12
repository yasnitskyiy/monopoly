import React from "react";
import {Container} from "react-bootstrap";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Features from "../../components/Features/Features";

const Home = () => {
    return (
        <>
            <div className='d-flex min-vh-100 flex-column'>
            <Header/>
            <Container className='flex-grow-1'>
                <Features/>
            </Container>
            <Footer className=''/>
            </div>
        </>
    )
}

export default Home