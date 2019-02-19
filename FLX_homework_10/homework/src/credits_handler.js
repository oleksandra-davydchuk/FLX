function userCard(key) {
  let balance = 100;
  let transactionLimit = 100;
  let historyLogs = [];
  let tax = 0.05;
  let time = new Date().toLocaleString('en-GB');

  return {
    getCardOptions() {
      return {
        key,
        balance,
        transactionLimit,
        historyLogs
      };
    },
    putCredits(amount) {
      balance += amount;
      historyLogs.push({
        operationType: 'Received credits',
        credits: amount,
        operationTime: time
      });
    },
    takeCredits(amount) {
      balance -= amount;
      historyLogs.push({
        operationType: 'Withdrawal of credits',
        credits: amount,
        operationTime: time

      });
    },
    setTransactionLimit(amount) {
      transactionLimit = amount;
      historyLogs.push({
        operationType: 'Transaction limit change',
        credits: amount,
        operationTime: time
      });
    },
    transferCredits(amount, userCard) {
      let taxedCredit = amount * tax + amount;
      if (taxedCredit > balance) {
        console.log(`Sorry, you can't transfer credits: exceeded balance :(`);
      } else if (taxedCredit > transactionLimit) {
        console.log(`Sorry, you can't transfer credits: exceeded transaction limit :(`);
      } else {
        this.takeCredits(taxedCredit);
        userCard.putCredits(amount);
      }
    }
  };
}

class UserAccount {
  constructor(name) {
    this.name = name;
    this.cards = [];
    this.maxCards = 3;
  }

  addCard() {
    if (this.cards.length < this.maxCards) {
      this.cards.push(userCard(this.cards.length + 1));
    } else {
      console.log(`Sorry, you can't have more than 3 cards.`);
    }
  }
  getCardByKey(key) {
    return this.cards[key - 1];
  }
}
