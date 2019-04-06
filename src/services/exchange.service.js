import fire from './fire'
import web3 from './web3'
import getExchangeRate from './bittrex.service'
import { generatePool } from './pool.service';

export async function initBankFeePool() {
  const bankAccount = await getBankAccount()
  const feeAccount = await getFeeAccount()
  await generatePool()

  console.log(bankAccount, feeAccount)
}

export async function getBankAccount() {
  const accounts = await web3.eth.getAccounts()
  const coinbase = accounts[0]
	if (!coinbase) {
		const newPassword = Date.now().toString()
    const newBankAddress = await web3.eth.personal.newAccount(newPassword)
    const newBankAccount = {
			ethAddress: newBankAddress,
			ethPassword: newPassword
		}
    await fire.database().ref('/bank').set(newBankAccount)
    return newBankAccount
  }
  
  const bankAccountDB = await fire.database().ref('/bank').once('value')
  const parsedBankAccount = await bankAccountDB.val()
  
  if (parsedBankAccount) {
    return parsedBankAccount
  }

  alert('error with bank account')

}

export async function getFeeAccount() {
	const feeAccountDB = await fire.database().ref('/fee').once('value')
	const parsedFeeAccount = await feeAccountDB.val()
	
	if (parsedFeeAccount) {
		return parsedFeeAccount
	}
	
	const newPassword = Date.now().toString()
	const newFeeAddress = await web3.eth.personal.newAccount(newPassword)
	const newFeeAccount = {
		balanceETH: 0,
		balanceUSD: 0,
		ethAddress: newFeeAddress,
		ethPassword: newPassword
	}
	await fire.database().ref('/fee').set(newFeeAccount)
	return newFeeAccount
}

export async function exchangeEthToUsd (userUid, amount){
    const userFromDbRes = await fire.database().ref('/users/' + userUid).once('value')
    const userFromDb = await userFromDbRes.val()

    const excahngeRate = getExchangeRate()
    const amountToGet = amount*excahngeRate

    const bankFromDbRes = await fire.database().ref('/users/bank').once('value')
    const bankFromDb = await bankFromDbRes.val()

    const feeFromDbRes = await fire.database().ref('/users/fee').once('value')
    const fee = await bankFromDbRes.val()

    const feePercentage = 0.1
    const actualFee = feePercentage * amount

    if(userFromDb.balanceETH < actualFee + amount)
        return

    userFromDb.balanceETH = userFromDb.balanceETH-amount
    userFromDb.balanceUSD = userFromDb.balanceUSD+amountToGet

    const publicKeyBank = bankFromDb.ethAddress

    var rawTransaction = {
        "from": userFromDb.ethAddress,
        "to": publicKeyBank,
        "value": web3.utils.toHex(web3.utils.toWei(amount, "ether")),
        "gas": 200000,
        "chainId": 300
      };
    web3.eth.accounts.signTransaction(rawTransaction, userFromDb.ethPassword).then(signed=>{
    web3.eth.sendSignedTransaction(signed.rawTransaction).on('receipt', console.log)
      })
  
    var rawTransactionFee = {
        "from": userFromDb.ethAddress,
        "to": fee.ethAddress,
        "value": web3.utils.toHex(web3.utils.toWei(actualFee, "ether")),
        "gas": 200000,
        "chainId": 300
      };
    web3.eth.accounts.signTransaction(rawTransactionFee, userFromDb.ethPassword).then(signed=>{
    web3.eth.sendSignedTransaction(signed.rawTransactionFee).on('receipt', console.log)
    })
}