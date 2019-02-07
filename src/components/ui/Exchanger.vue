<template>
    <Paper class="exchanger">
        <h2>Exchange Amount</h2>
        <div class="exchanger-divider"></div>
        <span>
            Convert {{ethToUsd ? 'ETH' : 'USD'}} 
            <button @click="changeDirection()"> -> </button>
            {{ethToUsd ? 'USD' : 'ETH'}}
        </span>
        <form  @submit.prevent="convertAmount($event)" >
            <label>
                <span>Amount: </span>
                <input 
                    name="amount" 
                    placeholder="eg. 4"
                    type="number"
                    min="0"
                    :max="ethToUsd ? user.balanceETH : user.balanceUSD"
                    step="0.001"
                    required/>
            </label>
            <button>Convert Amount</button>
        </form>
    </Paper>
</template>

<script>
import Paper from './Paper'

export default {
    components: {
        Paper
    },
    data() {
        return {
            ethToUsd: true
        }
    },
    props: ['user'],
    methods: {
        changeDirection() {
            this.ethToUsd = !this.ethToUsd
        },
        convertAmount(event) {
            const conversionInfo = {
                amount: event.target.amount.value,
                ethToUsd: this.ethToUsd
            }
            this.$emit('submitAmount', {conversionInfo})
        }
    }
}
</script>

<style>
.exchanger {
    display: flex;
    flex-direction: column;
    padding: 1em;
    margin: 1em;
}

.exchanger > * {
    margin: 0.5em;
}

.exchanger-divider {
    width: 100%;
    height: 1px;
    border-bottom: 0.5px solid lightgray;
    margin: 0;
}

</style>
