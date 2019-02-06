import fire from './fire'

export async function registerUser(email, password) {
    const res = await fire.auth().createUserWithEmailAndPassword(email, password).catch(error => {
        alert(error.message)
        return false
    })
    console.log('REGISTER', res)
    await fire.database().ref('users/' + res.user.uid).set({
        email,
        password
    })
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
        return true
    } else {
        return false
    }
}

export async function logoutUser() {
    await fire.auth().signOut().catch(error => {
        alert(error.message)
        return false
    })
    return true
}