import React from 'react';
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup';
import  {   Row,    Col,    Form    }   from    'react-bootstrap';
import Button from 'react-bootstrap/Button'
import  './Card.css';
import  axios from    'axios';

const   baseURL =   'https://axios-http.com/docs/api_intro';
const   cartItems   =   [
    {   
        id      :   1,
        img :   'https://i.imgur.com/fSlaW1x.jpg',   
        title   :   'Colored Shirts for Men',
        text    :   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {   
        id      :   2,
        img :   'https://i.imgur.com/fSlaW1x.jpg',   
        title   :   'Colored Shirts for Men',
        text    :   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {   
        id      :   3,
        img :   'https://i.imgur.com/fSlaW1x.jpg',   
        title   :   'Colored Shirts for Men',
        text    :   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {   
        id      :   4,
        img :   'https://i.imgur.com/fSlaW1x.jpg',   
        title   :   'Colored Shirts for Men',
        text    :   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {   
        id      :   5,
        img :   'https://i.imgur.com/fSlaW1x.jpg',   
        title   :   'Colored Shirts for Men',
        text    :   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
]

class   ItemsCard    extends React.Component {
    constructor(props)  {
        super(props);
    }

    componentDidMount() {
        this.getCartData();
    }

    getCartData()   {
        console.log('get cart data');
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
                        cartItems.map((element) =>  (
                            <Col>
                                <Card>
                                    <Card.Img  src={element.img} />
                                    
                                    <Card.Body>
                                        <Card.Title>{element.title}</Card.Title>
                                        <Card.Text>
                                            {element.text}
                                        </Card.Text>
                                    </Card.Body>

                                    <Button variant="primary">Add to Cart</Button>

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