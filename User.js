class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.amount = 0;
  }

  makeDeposit(amount) {
    this.amount += amount;
    return this;
  }

  makeWithdrawal(amount) {
    this.amount -= amount;
    return this;
  }

  transferMoney(otherUser, amount) {
    this.makeWithdrawal(amount);
    otherUser.makeDeposit(amount);
    return this;
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
reuben.makeDeposit(2000).makeDeposit(3000).makeWithdrawal(1000);
reuben.displayBalance();
