import React, {Component} from 'react'
import Paper from './Paper'
import './Exchanger.css'

class Exchanger extends Component {
    constructor(props) {
        super(props)
        this.state = {ethToUsd: true}
    }

    render() {
        return (
            <div className="exchanger">
            <Paper>
                <h2>Exchange Amount</h2>
                <div className="exchanger-divider"></div>
                <span>
                    Convert {this.state.ethToUsd ? 'ETH' : 'USD'} 
                    <button id="convert-button" onClick={() => this.changeDirection()}> -> </button>
                    {this.state.ethToUsd ? 'USD' : 'ETH'}
                </span>
                <form  onSubmit={(ev) => this.convertAmount(ev)} >
                    <label>
                        <span>Amount: </span>
                        <input 
                            name="amount" 
                            placeholder="eg. 4"
                            type="number"
                            min="0"
                            max={this.state.ethToUsd ? this.props.user.balanceETH : this.props.user.balanceUSD}
                            step="0.001"
                            required/>
                    </label>
                    <button>Convert Amount</button>
                </form>
            </Paper>
            </div>
        )
    }

    changeDirection() {
        this.setState(state => {
            return {ethToUsd: !state.ethToUsd}
        })
    }

    convertAmount(event) {
        event.preventDefault()

        const conversionInfo = {
            amount: event.target.amount.value,
            ethToUsd: this.state.ethToUsd
        }
        this.props.OnSubmitAmount(conversionInfo)
    }
}

export default Exchanger