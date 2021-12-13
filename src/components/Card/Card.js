import React, { useState } from 'react';
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup';
import  {   Row,    Col,    Form, Navbar    }   from    'react-bootstrap';
import Button from 'react-bootstrap/Button'
import  './Card.css';
import  axios from    'axios';

const   baseURL =   'https://fakestoreapi.com/products';
let   cartItems   =   [];

class   ItemsCard    extends React.Component {
    constructor(props)  {
        super(props);

        this.state  =   {
            Items    : [],
            cartItems   :   [],
        }

        this.handleClick = this.handleClick.bind(this);
        
    }

    componentDidMount() {
        this.getCartData();
    }

    getCartData()   {
        console.log('get cart data');
        axios.get(baseURL).then((response)  =>  {
            if(response.status  ==  200)    {
                this.setState({Items    :   response.data});
            }   else    {
                alert(response.message);
            }
        })
        .catch((error)  =>  {
            console.log(error);
            alert(error.message);
        })
    }

    handleClick(element) {
        console.log(element);
        this.state.cartItems.push(element);
        console.log(this.state.cartItems);
        console.log(this.state.cartItems.length);

        // Parent child communication
        this.props.changeLink(this.state.cartItems.length);
        this.props.changeCartItems(this.state.cartItems);
    }

    render()    {
        return  (
            <div>
                <CardGroup>

                    {/* 
                    xs-> for extra small devices-> <768px
                    sm-> for small devices-> >=768px
                    md-> for medium devices-> >=992px
                    lg-> for large devices-> >=1200px
                    */}
                    
                    <Row xs={1} sm={2}  md={3} lg={4} className="g-4">
                    {
                        this.state.Items.map((element) =>  (
                            
                            <Col key={element.id}>
                                <Card>
                                    <Card.Img  src={element.image} />
                                    
                                    <Card.Body>
                                        <Card.Title>
                                            {element.title.length   >   25 ?   (element.title.slice(0,25) + '...') :   (element.title)}
                                        </Card.Title>
                                        <Card.Text>
                                            {element.description.length > 120 ?    (element.description.slice(0,120) + '...') :   (element.description)}
                                        </Card.Text>
                                        <Card.Text>&#8377;{element.price}</Card.Text>
                                    </Card.Body>

                                    <Button variant="primary" onClick={() => this.handleClick(element)}>Add to Cart</Button>
                                    <Navbar  props={this.state.cartItems}/>
                                </Card>
                            </Col>
                        ))
                    }
                    </Row>

                </CardGroup>
            </div>
        )
    }
}

export  default ItemsCard;