import fire from './fire'
import web3 from './web3'

export async function exchangeEthToUsd (userUid, amout){
    const userFromDbRes = await fire.database().ref('/users/' + userUid).once('value')
    const userFromDb = await userFromDbRes.val()

    
   
}