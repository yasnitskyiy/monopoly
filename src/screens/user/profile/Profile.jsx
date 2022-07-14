import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

import './Profile.scss';
import Achievements from "../achievements/Achievements";


const Profile = () => {

    const user = useSelector((state) => state.user.value);

    return (
        <Container className='flex-grow-1 p-3 profile_info'>
            <Row>
                <Col lg={4} className='text-center'>
                    <img className='profile_photo' src={user.profileImage.url} alt=""/>
                </Col>
                <Col lg={8} className='stats'>
                    <div className='text-center x d-flex flex-column justify-content-evenly'>
                        <h3 className='userName'>{user.name}</h3>
                        <hr/>
                        <span>Games: {user.games.total}</span>
                        <span>Wins: {user.games.wins}</span>
                    </div>
                </Col>
            </Row>
            <hr/>
            <Row>
                <Col>
                    <h3 className='text-center'>Achievements</h3>
                    <div className='achievements'>
                        <Row>
                            <Achievements />
                            <Achievements />
                            <Achievements />
                            <Achievements />
                            <Achievements />
                            <Achievements />
                            <Achievements />
                            <Achievements />
                            <Achievements />
                            <Achievements />
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Profile;