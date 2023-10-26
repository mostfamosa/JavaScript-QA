//Create a Bank module. It should have a variable and two functions:
//1.A private money variable which starts off at 500
//2.A depositCash function which takes a cash parameter and uses it to increase money
//3.A checkBalance function which logs the money

const Bank = function () {
    let _balance = 500
    const depositCash = cash => _balance += cash
    const checkBalance = () => console.log(_balance)

    return {
        deposit: depositCash,
        showBalance: checkBalance
    }
}

const bank = Bank()
bank.deposit(200)
bank.deposit(250)
bank.showBalance() //should print 950