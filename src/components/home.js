import React from 'react';
import {Link} from 'react-router-dom';

class Home extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
    return (<div className="App">
    <header className="App-header">
      <h1>Todo Application</h1>
      <p><Link to="/login">Login</Link></p>
        <p data-auth="true"><span data-field="user.name"></span> | <Link to="/logout">Logout</Link></p>
    </header>
    <footer><p>2019</p></footer>
    </div>);
    }
}

export default Home;