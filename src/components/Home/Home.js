import  './Home.css';
import  React   from    'react';
import NavigationBar from '../Navbar/Navbar';
import  ItemsCard   from    '../Card/Card';
import  Footer  from    '../Footer/Footer';

class   Home    extends React.Component {

    constructor(props)  {
        super(props);
    }

    render()    {
        return  (
            <div>
                <NavigationBar />
                <ItemsCard />
                <Footer />
            </div>
        )
    }
}

export default Home;