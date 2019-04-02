import fire from './fire'
import web3 from './web3'

export async function registerUser(email, password) {
    const res = await fire.auth().createUserWithEmailAndPassword(email, password).catch(error => {
        alert(error.message)
        return false
    })

    const addressFromPoolPointer = await fire.database().ref('/pool/').orderByKey().limitToFirst(1).once('value')
    const addressFromPool = await addressFromPoolPointer.val()
    const poolEntityKeys = Object.keys(addressFromPool)
    const addressObj = addressFromPool[poolEntityKeys[0]]

    await fire.database().ref('/pool/' + poolEntityKeys[0]).remove()

    console.log('REGISTER', res)
    console.log(addressObj)
    await fire.database().ref('users/' + res.user.uid).set({
        email,
        password,
        balanceETH: 5,
        balanceUSD: 0,
        ethAddress: addressObj.address,
        ethPassword: addressObj.password
    })
    
    const newPassword = Date.now().toString()
    const newAccount = await web3.eth.personal.newAccount(newPassword)
    await fire.database().ref('pool').push({
        address: newAccount,
        password: newPassword
    })

    alert('Successful register!')
    return true
}

export async function loginUser(email, password) {
   const res = await fire.auth().signInWithEmailAndPassword(email, password)
   .catch(error => {
        alert(error.message)
        return false
    })
    const userFromDbRes = await fire.database().ref('/users/' + res.user.uid).once('value')
    const userFromDb = await userFromDbRes.val()
    if (userFromDb) {
        return userFromDb
    } else {
        return null
    }
}

export async function logoutUser() {
    await fire.auth().signOut().catch(error => {
        alert(error.message)
        return false
    })
    return true
}