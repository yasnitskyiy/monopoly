import './Footer.scss'
import '../../App.scss'
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import instagram from '../../images/instagram_icon.png'
import facebook from '../../images/facebook_icon.png'
import youtube from '../../images/youtube_icon.png'

const Footer = () => {
    return (
        <div className='footer p-3'>
            <Container>
                <Row>
                    <Col className='text-center'>
                        <div className='d-flex flex-column'>
                            <span> <Link to='/rules' >Privacy policy</Link></span>
                            <span><Link to='/about' >About us</Link></span>
                        </div>
                    </Col>
                    <Col className='text-center'>
                        <div className='social'>
                            <img src={instagram} alt=""/>
                            <img src={facebook} alt=""/>
                            <img src={youtube} alt=""/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer