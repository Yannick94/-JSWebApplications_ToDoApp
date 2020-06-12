import React from 'react';
import { Link } from 'react-router-dom';
import store from "../store";

class Logout extends React.Component{
    
    render(){
        store.erase();
        return (
            <div>
		        <h2>Und Tschüss</h2>
		        <p>Back to &raquo; <Link to="/">login</Link></p>
	        </div>);
    }
}

export default Logout;