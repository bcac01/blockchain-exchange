import fire from './fire'
import web3 from './web3'

export async function generatePool() {
    for(let i = 0; i < 5; i++) {
        const password = Date.now().toString()
        const newAccount = await web3.eth.personal.newAccount(password)
        await fire.database().ref('pool').push({
            address: newAccount,
            password: password
        })
    }
}

