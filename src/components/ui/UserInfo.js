import React, {Component} from 'react'
import Paper from './Paper';
import './UserInfo.css'

class UserInfo extends Component {
    render() {
        return (
            <div className="user-info">
            <Paper>
            <h2>User Info</h2>
            <div className="user-info-divider"></div>
            <div className="user-info-details">
                <span>Email: {this.props.user.email}</span>
                <span>Balance ETH: {this.props.user.balanceETH}</span>
                <span>Balance USD: {this.props.user.balanceUSD}</span>
            </div>
        </Paper>
        </div>
        )
    }
}

export default UserInfo