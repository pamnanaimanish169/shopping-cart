import  './Home.css';
import  React   from    'react';
import NavigationBar from '../Navbar/Navbar';
import  ItemsCard   from    '../Card/Card';
import  Footer  from    '../Footer/Footer';

class   Home    extends React.Component {

    constructor(props)  {
        super(props);

        this.state = {
            quantity : 0,
            cartItems : [],
        };
    }

    onChangeLinkName(newName) {
        this.setState({
            quantity : newName
        });
    }

    onChangeCartItems(cartItems) {
        this.setState({
            cartItems : cartItems
        });
    }

    render()    {
        return  (
            <div>
                <NavigationBar cartItems={this.state.cartItems} quantity={this.state.quantity} />
                <ItemsCard changeLink={this.onChangeLinkName.bind(this)} changeCartItems={this.onChangeCartItems.bind(this)}/>
                <Footer />
            </div>
        )
    }
}

export default Home;