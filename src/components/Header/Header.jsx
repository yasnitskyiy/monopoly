import './Header.scss'
import photo from '../../images/Person.jpg'
import {NavLink} from "react-router-dom";
import UserMenuContainer from "../../screens/userMenu/UserMenuContainer";
import {Container, Navbar, Nav, NavDropdown, Col, Row} from "react-bootstrap";
import {useAuth} from "../../context/AuthContext";

const Header = (props) => {

    const { logout } = useAuth()

    function acc_logout (){
        logout()
    }

    return (
        <Navbar className='navbar' collapseOnSelect expand="lg" variant="dark">
            <Container>
                <Navbar.Brand href="/">
                    <h1>MONOPOLY UA</h1>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                {/*id="responsive-navbar-nav"*/}
                <Navbar.Collapse className="justify-content-end" >
                    <Nav>
                        <Nav.Link className='link-style btn-play' href="#game">PLAY GAME</Nav.Link>
                        <Nav.Link className='link-style' href="#features">Stats</Nav.Link>
                        <Nav.Link className='link-style' href="#pricing">Friends</Nav.Link>
                        <NavDropdown title="Profile" id="collasible-nav-dropdown">
                            <NavDropdown.ItemText href="#action/3.1">
                                <Row >
                                    <Col md={3} xs={12}>
                                        <img
                                            src={photo}
                                            width="40"
                                            height="40"
                                            className="d-block m-auto"
                                            alt="React Bootstrap logo"
                                        />
                                    </Col>
                                    <Col md xs className='m-auto text-center'>
                                        AAAAAA15AAAAAAA
                                    </Col>
                                </Row>
                                {/*<div className="row">*/}
                                {/*    <div >*/}
                                {/*       */}
                                {/*    </div>*/}
                                {/*    <div className="col ">*/}
                                {/*       */}
                                {/*    </div>*/}
                                {/*</div>*/}
                            </NavDropdown.ItemText>
                            <NavDropdown.Item href="#action/3.2">Settings</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/" onClick={acc_logout}>Sign out</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header