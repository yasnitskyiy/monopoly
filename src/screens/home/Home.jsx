import React from "react";
import { Container } from "react-bootstrap";

import Features from "../../components/Features/Features";

const Home = () => {
    return (
        <Container className='flex-grow-1'>
            <Features/>
        </Container>
    )
}

export default Home