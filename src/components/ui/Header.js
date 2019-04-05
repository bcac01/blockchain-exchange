import React, {Component} from 'react'
import './Header.css'

class Header extends Component {
    render() {
        return (
            <div className="header">
                <h1>Exchange</h1>
                <button onClick={() => this.props.OnLogout()}>Logout</button>
            </div>
        )
    }
}

export default Header