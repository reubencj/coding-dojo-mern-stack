class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.amount = 0;
  }

  makeDeposit(amount) {
    this.amount += amount;
  }

  makeWithdrawal(amount) {
    this.amount -= amount;
  }

  transferMoney(otherUser, amount) {
    this.makeWithdrawal(amount);
    otherUser.makeDeposit(amount);
  }
  displayBalance() {
    console.log(`User: ${this.name} \nBalance: ${this.amount} `);
  }
}

const reuben = new User("Reuben John", "reuben@gmail.com");
reuben.makeDeposit(1000);
reuben.displayBalance();
reuben.makeWithdrawal(500);
reuben.displayBalance();
const karen = new User("Karen John", "karen@gmail.com");
reuben.transferMoney(karen, 500);
reuben.displayBalance();
karen.displayBalance();
