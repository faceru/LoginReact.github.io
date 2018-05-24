import React, { Component } from 'react';
import './App.css';
import {HashRouter, Route, Link} from 'react-router-dom';
import Registrate from './registrate';
import Login from './login';
import Home from './home';




class Menu extends Component {
  render() {
    return (
    	<HashRouter>
    		<div>
    			<ul className="menu">
    				<li className="menu-item">
    					<Link to='/' className="btn btn-primary">
    						Home
    					</Link>
    				</li>
    				<li className="menu-item">
    					<Link to='/Login' className="btn btn-primary">
    						Login
    					</Link>
    				</li>
    				<li className="menu-item">
    					<Link to='/Registrate' className="btn btn-primary">
    						Registrate
    					</Link>
    				</li>
    			</ul>
    			<hr/>
    			<Route exact path='/' component={Home}/>
    			<Route path='/Login' component={Login}/>
    			<Route path='/Registrate' component={Registrate}/>
    		</div>
    	</HashRouter>
   );
  }
}

export default Menu;