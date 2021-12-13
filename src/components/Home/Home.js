import  './Home.css';
import  React   from    'react';
import NavigationBar from '../Navbar/Navbar';
import  ItemsCard   from    '../Card/Card';
import  Footer  from    '../Footer/Footer';

class   Home    extends React.Component {

    constructor(props)  {
        super(props);

        this.state = {
            quantity : 0
        };
    }

    onChangeLinkName(newName) {
        this.setState({
            quantity : newName
        });
    }

    render()    {
        return  (
            <div>
                <NavigationBar quantity={this.state.quantity} />
                <ItemsCard changeLink={this.onChangeLinkName.bind(this)}/>
                <Footer />
            </div>
        )
    }
}

export default Home;