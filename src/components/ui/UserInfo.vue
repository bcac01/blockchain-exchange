<template>
    <Paper class="user-info">
        <h2>User Info</h2>
        <div class="user-info-divider"></div>
        <div class="user-info-details">
            <span>Email: {{user.email}}</span>
            <span>Balance ETH: {{user.balanceETH}}</span>
            <span>Balance USD: {{user.balanceUSD}}</span>
        </div>
    </Paper>
</template>

<script>
import Paper from './Paper'

export default {
    components: {
        Paper
    },
    props: ['user']
}
</script>

<style>
.user-info {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    padding: 1em;
    margin: 1em;
}

.user-info > h2 {
    margin: 0.5em;
}

.user-info-divider {
    width: 100%;
    height: 1px;
    border-bottom: 0.5px solid lightgray;
}

.user-info-details {
    margin: 0.5em;
    margin-left: 1em;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
}

.user-info-details > * {
    margin: 0.5em;
}

</style>
