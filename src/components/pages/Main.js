import React, {Component} from 'react'
import './Main.css'
import Header from '../ui/Header';
import Exchanger from '../ui/Exchanger';
import UserInfo from '../ui/UserInfo';

class Main extends Component {
    render() {
        return (
            <div className="main">
                <Header OnLogout={() => this.logoutUserAndGoBack()}/>
                <div className="main-top-layer">
                    <UserInfo user={this.props.user} className="main-user-info"/>
                    <Exchanger user={this.props.user} OnSubmitAmount={(event) => this.convertAmount(event)} className="main-exchanger"/>
                </div>
            </div>
        )
    }

    logoutUserAndGoBack() {
        // api call: logoutUser()
        this.props.OnBackToLogin()
    }

    convertAmount(event) {
        //const conversionInfo = event.conversionInfo
        console.log(event) 
    }
}

export default Main