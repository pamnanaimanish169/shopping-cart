import React from 'react';
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup';
import  {   Row,    Col,    Form    }   from    'react-bootstrap';
import Button from 'react-bootstrap/Button'
import  './Card.css';

class   ItemsCard    extends React.Component {
    constructor(props)  {
        super(props);
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
                        <Col>
                            <Card>
                                <Card.Img  src="/958-100x160.jpg" />
                                
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.
                                    </Card.Text>
                                </Card.Body>

                                <Button variant="primary">Add to Cart</Button>


                            </Card>
                        </Col>

                        <Col>
                            <Card>
                                <Card.Img  src="/958-100x160.jpg" />
                                
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.
                                    </Card.Text>
                                </Card.Body>

                                <Button variant="primary">Add to Cart</Button>


                            </Card>
                        </Col>

                        <Col>
                            <Card>
                                <Card.Img  src="/958-100x160.jpg" />
                                
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.
                                    </Card.Text>
                                </Card.Body>

                                <Button variant="primary">Add to Cart</Button>


                            </Card>
                        </Col>

                        <Col>
                            <Card>
                                <Card.Img  src="/958-100x160.jpg" />
                                
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.
                                    </Card.Text>
                                </Card.Body>

                                <Button variant="primary">Add to Cart</Button>


                            </Card>
                        </Col>

                        <Col>
                            <Card>
                                <Card.Img  src="/958-100x160.jpg" />
                                
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.
                                    </Card.Text>
                                </Card.Body>

                                <Button variant="primary">Add to Cart</Button>


                            </Card>
                        </Col>
                    </Row>

                </CardGroup>
            </div>
        )
    }
}

export  default ItemsCard;