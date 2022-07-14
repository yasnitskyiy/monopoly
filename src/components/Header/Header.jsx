import './Header.scss'
import { Container, Navbar, Nav, NavDropdown, Col, Row } from "react-bootstrap";
import { useAuth } from "../../context/AuthContext";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {

    const { logout } = useAuth()
    const navigate = useNavigate();

    async function acc_logout() {
        await logout()
        navigate('/')
    }

    const userName = useSelector((state) => state.user.value.name);
    const userImage = useSelector((state) => state.user.value.profileImage.url);

    return (
        <Navbar className='navbar' collapseOnSelect expand="lg" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <h1>MONOPOLY UA</h1>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse className="justify-content-end">
                    <Nav className='text-white'>
                        <Nav.Link className='btn-play menu' as={Link} to="/game">PLAY GAME</Nav.Link>
                        <Nav.Link className='menu m-auto' as={Link} to="/friends">Friends</Nav.Link>
                        <NavDropdown title="Profile" id="collasible-nav-dropdown" align="end" className='m-auto menu'>
                            <NavDropdown.Item as={Link} to="/profile">
                                <Row>
                                    <Col md xs className='m-auto text-center'>
                                        {userName}
                                    </Col>
                                    <Col md={3} xs={12}>
                                        <img
                                            src={userImage}
                                            width="40"
                                            height="40"
                                            className="d-block m-auto"
                                            alt='image not found'
                                        />
                                    </Col>
                                </Row>
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/settings">Settings</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item onClick={acc_logout}>Sign out</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header