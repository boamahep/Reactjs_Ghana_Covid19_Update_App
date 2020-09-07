import React, {Component} from 'react';
import logo from '../image/logo.PNG';

class HeaderComponent extends Component {
    render() {
        return (
            <header className='header'>
  <div className='navbar'>
    <img src={logo} alt="logo" width="100px" height="100px"/><br></br>
    GHANA COVID-19 UPDATE INFOMATION
    </div>
    </header>
        );
    }
}

export default HeaderComponent;