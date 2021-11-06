import  './Home.css';
import  React   from    'react';
import NavigationBar from '../Navbar/Navbar';

class   Home    extends React.Component {

    constructor(props)  {
        super(props);
    }

    render()    {
        return  (
            <div>
                <NavigationBar />
            </div>
        )
    }
}

export default Home;