import React, {Component} from 'react';
import logo from '../image/logo.PNG';

class HeaderComponent extends Component {
    render() {
        return (
            <div className='header'>
    <img className='img' src={logo} alt="logo" width="100px" height="100px" />
    <p className='navbar'>GHANA COVID-19 UPDATE INFOMATION</p>
    </div>
     );
    }
}

export default HeaderComponent;