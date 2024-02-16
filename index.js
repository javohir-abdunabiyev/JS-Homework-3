let name = prompt('What is your name?').trim().toLowerCase()

if(name === 'alex') {
} else {
    alert('You are not Alex')
}

let account = prompt('Account number')

if(account === '7777') {} else {
    alert('Wrong')
}

let money = prompt('How much to cash out?')

if(money <= 10000) {
    alert('You withdrew from the account: ' + money)
} else {
    alert('Insufficient funds')
}