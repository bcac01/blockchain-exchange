export default async function getExchangeRate (){

    return await  fetch('https://api.bittrex.com/api/v1.1/public/getmarketsummary?market=USD-ETH')
    .then(response => response.json())
    .then(data => data.result.High)
}