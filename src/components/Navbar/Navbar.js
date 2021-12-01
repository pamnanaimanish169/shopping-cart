import  './Navbar.css';
import  React   from    'react';
import Navbar from 'react-bootstrap/Navbar';
import  Footer  from    '../Footer/Footer';
import  ItemsCard    from    '../Card/Card';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


class NavigationBar    extends    React.Component {
    constructor(props)  {
        super(props);
    }

    render()    {
        return(
            <div>
                <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Button variant="primary"> <FontAwesomeIcon icon={faShoppingCart} /></Button>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
            </div>
        )
    }
}

export default NavigationBar;