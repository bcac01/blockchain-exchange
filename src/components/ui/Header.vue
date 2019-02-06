<template>
    <div class="header">
        <h1>Exchange</h1>
        <button @click="logout()">Logout</button>
    </div>
</template>

<script>
export default {
    methods: {
        logout() {
            this.$emit('logout')
        }
    }
}
</script>

<style>
.header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 3em;
    color: whitesmoke;
    background-color: cornflowerblue;
}

.header > * {
    margin: 5px;
    margin-left: 10px;
    margin-right: 10px;
}

.header > h1 {
    font-size: 2em;
}

.header > button {
    background-color: whitesmoke;
    color: cornflowerblue;
    border: none;
    border-radius: 5px;
    outline: none;
    font-size: 1em;
    padding: 3px;
}
</style>
