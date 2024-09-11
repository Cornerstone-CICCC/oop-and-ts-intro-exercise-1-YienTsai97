// Create a BankAccount class with the following:
// - Properties: accountNumber, balance
// - Methods: 
//   - deposit(amount): Adds the amount to the balance.
//   - withdraw(amount): Deducts the amount from the balance if there are sufficient funds.
// Add a static method compareAccounts(account1, account2) that compares two BankAccount objects and returns the account with the higher balance.

class BankAccount {
  // YOUR CODE HERE
  #accountNumber;
  #balance;
  static accountOne;
  static accountTwo;

  constructor(accountNumber, balance) {
    this.#accountNumber = accountNumber
    this.#balance = balance
  }

  get accountNumber() {
    return this.#accountNumber
  }

  get balance() {
    return this.#balance
  }

  deposit(addNum) {
    this.#balance += addNum
    console.log(this.#balance)
  }

  withdraw(deductsNum) {
    if (deductsNum > this.accountNumber) {
      throw new Error('Not enough amount!')
    }
    this.#balance -= deductsNum
    console.log(this.#balance)
  }

  static compareAccounts(accountOne, accountTwo) {
    if (accountOne.balance > accountTwo.balance) {
      return accountOne
    } else if (accountOne.balance < accountTwo.balance) {
      return accountTwo
    }
    throw new Error('Two amount are equal !')
  }

}


// TEST CASE / DRIVER CODE
const account1 = new BankAccount(123456, 500);
const account2 = new BankAccount(654321, 1000);
account1.deposit(300); // account1 becomes 800
account2.withdraw(300); // account2 becomes 700
const richerAccount = BankAccount.compareAccounts(account1, account2);
console.log(`Account ${richerAccount.accountNumber} has the higher balance.`);
// Expected output: "Account 123456 has the higher balance."