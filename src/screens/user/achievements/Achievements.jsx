import React from 'react';
import { Card, CardImg, Col } from "react-bootstrap";
import someImg from '../../../images/template.png';

const Achievements = () => {
    return (
        <Col className='mt-3'>
            <Card border="info" className='m-auto' style={{width: '13rem', backgroundColor: 'rgba(0, 0, 0, 0.3)'}}>
                <Card.Header className='text-center'>NEW PLAYER</Card.Header>
                <Card.Body>
                    <CardImg src={someImg}/>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Achievements;