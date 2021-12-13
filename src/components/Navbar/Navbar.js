import './Navbar.css';
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Footer from '../Footer/Footer';
import ItemsCard from '../Card/Card';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import { InputGroup } from 'react-bootstrap';

class NavigationBar extends React.Component {
    constructor(props) {
        super(props);

        console.log(this.props);

        this.state = {
            show: false
        }

        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
    }

    handleShow() {
        this.setState({ show: true });
    }

    handleClose() {
        this.setState({ show: false });
    }

    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Button variant="primary" onClick={this.handleShow}> <FontAwesomeIcon icon={faShoppingCart} />{this.props.quantity}</Button>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Body>
                        <ListGroup as="ol">
                            <ListGroup.Item
                                as="li"
                                className="d-flex justify-content-between align-items-start"
                            >
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">Subheading</div>

                                    <div className="cartItems">
                                        <Button variant="danger">-</Button>
                                        <InputGroup.Text>1</InputGroup.Text>
                                        <Button variant="primary">+</Button>
                                    </div>
                                    
                                </div>
                                <Badge variant="primary" pill>
                                    14
                                </Badge>
                            </ListGroup.Item>
                            <ListGroup.Item
                                as="li"
                                className="d-flex justify-content-between align-items-start"
                            >
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">Subheading</div>

                                    <div className="cartItems">
                                        <Button variant="danger">-</Button>
                                        <InputGroup.Text>1</InputGroup.Text>
                                        <Button variant="primary">+</Button>
                                    </div>
                                    
                                </div>
                                <Badge variant="primary" pill>
                                    14
                                </Badge>
                            </ListGroup.Item>
                            <ListGroup.Item
                                as="li"
                                className="d-flex justify-content-between align-items-start"
                            >
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">Subheading</div>

                                    <div className="cartItems">
                                        <Button variant="danger">-</Button>
                                        <InputGroup.Text>1</InputGroup.Text>
                                        <Button variant="primary">+</Button>
                                    </div>
                                    
                                </div>
                                <Badge variant="primary" pill>
                                    14
                                </Badge>
                            </ListGroup.Item>
                        </ListGroup>
                    </Modal.Body>
                    <Modal.Footer>
                        {/* Events for closing modal START */}
                        {/* <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.handleClose}>
                            Save Changes
                        </Button> */}
                        {/* Events for closing modal END */}
                        
                        <Button variant="danger">
                            Empty Cart
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default NavigationBar;