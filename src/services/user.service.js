import fire from './fire'

export async function getUser(userId) {
     const userFromDbRes = await fire.database().ref('/users/' + userId).once('value')
     const userFromDb = await userFromDbRes.val()
     return userFromDb
 }

 export async function updateUser(userId, user) {
    await fire.database().ref('users/' + userId).set(user)
    return user
 }