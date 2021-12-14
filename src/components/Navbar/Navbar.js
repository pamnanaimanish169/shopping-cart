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
            show: false,
            cartItems: [],
            uniqueCartItems : [],
        }

        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
    }

    componentDidMount() {
        
    }

    handleShow() {
        this.setState({ show: true });

        // Calculate the cart & update items accordingly
        this.state.cartItems = this.props.cartItems;
        const counts = {};

        this.state.cartItems.forEach((element) => {
            // change the quantity as per the count
            counts[element.title] = (counts[element.title] || 0)  + 1;
            element['quantity'] = counts[element.title];

        });

        // remove the duplicate item so that it dosen't appear again.
        let uniqueCartItems = [...new Set(this.state.cartItems)];

        this.state.uniqueCartItems = uniqueCartItems;
        let sum = 0;
        this.state.uniqueCartItems.forEach((element) => {
            sum += element.price * element.quantity;
        });

        this.state.uniqueCartItems['sum'] = sum;

    }

    handleEmptyCart() {
        this.setState({uniqueCartItems : [],cartItems : []});
        console.log(this.props);
        window.location.reload(false);
        
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

                            {/* Display the cart Items START */}

                            {this.state.uniqueCartItems.map((response) => (
                                <ListGroup.Item
                                    as="li"
                                    className="d-flex justify-content-between align-items-start"
                                    key={response.id}
                                >
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">{response.title}</div>

                                        <div className="cartItems">
                                            <Button variant="danger">-</Button>
                                            <InputGroup.Text>{response.quantity}</InputGroup.Text>
                                            <Button variant="primary">+</Button>
                                        </div>

                                        <div className="cartItems-floatRight">&#8377;{response.quantity * response.price}</div>

                                    </div>

                                </ListGroup.Item>
                            ))}

                            {/* Display the cart Items END */}

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

                        <Button variant="danger" onClick={this.handleEmptyCart.bind(this)}>
                            Empty Cart
                        </Button>

                        {this.state.uniqueCartItems['sum'] > 0 ? 
                        <div className="cartItems-floatRight">
                         &#8377;{(parseFloat(this.state.uniqueCartItems['sum']).toFixed(2))}
                        </div>
                        :
                        <div className="cartItems-floatRight">&#8377;0</div>
                        } 
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default NavigationBar;