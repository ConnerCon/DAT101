"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const accountType = {
    Normal: "Brukskonto",
    Saving: "Sparekonto",
    Credit: "Kreditkonto",
    Pension: "Pensionskonto"
};

printOut(
  accountType.Normal + ", " +
  accountType.Saving + ", " +
  accountType.Credit + ", " +
  accountType.Pension
);

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
class TAccount {
    #type;
    constructor(accountType) {
        this.#type = accountType;
        printOut(`myAccount = ${this.#type}`);
    }
    toString() {
        return this.#type;
    }
    setType(aType) {
        printOut(`Account is changed from ${this.#type} to ${aType}`);
        this.#type = aType;
        printOut(`myAccount = ${this.#type}`);
    }
}

const myAccount = new TAccount(accountType.Normal);
myAccount.setType(accountType.Saving);

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

class TAccount2 {
    #type;
    #balance;

    constructor(accountType) {
        this.#type = accountType;
        this.#balance = 0;
    }

    toString() {
        return this.#type;
    }

    setType(aType) {
        this.#type = aType;
    }

    getBalance() {
        return this.#balance;
    }

    deposit(aAmount) {
        this.#balance += aAmount;
        printOut(`Deposit of ${aAmount}, new balance is ${this.#balance}`);
    }

    withdraw(aAmount) {
        if (aAmount > this.#balance) {
            printOut(`Withdraw of ${aAmount} failed, not enough balance`);
        } else {
            this.#balance -= aAmount;
            printOut(`Withdraw of ${aAmount}, new balance is ${this.#balance}`);
        }
    }
}


const myAccount2 = new TAccount2("Normal"); 
myAccount2.deposit(100);
myAccount2.withdraw(25);
printOut(`My account balance is ${myAccount2.getBalance()}`);

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

class TAccount3 {
    #type;
    #balance;
    #withdrawCount;

    constructor(type) {
        this.#type = type;
        this.#balance = 75;
        this.#withdrawCount = 0;
    }

    deposit(aAmount) {
        this.#balance += aAmount;
        this.#withdrawCount = 0;
        printOut(`Deposit of ${aAmount}, new balance is ${this.#balance}`);
    }

    withdraw(aAmount) {
        if (this.#type === "Pension") {
            printOut("No withdrawals allowed from pension account!");
            return;
        }

        if (this.#type === "Saving" && this.#withdrawCount >= 3) {
            printOut("You cant withdraw from a Sparekonto more than three times!");
            return;
        }

        this.#balance -= aAmount;
        this.#withdrawCount++;
        printOut(`Withdraw of ${aAmount}, new balance is ${this.#balance}`);
    }

    setType(type) {
        this.#type = type;
        this.#withdrawCount = 0;
        printOut("Account is changed from Pensionskonto to Sparekonto");
    }
}

const acc = new TAccount3("Saving");

acc.deposit(25);

acc.withdraw(30);
acc.withdraw(30);
acc.withdraw(30);
acc.withdraw(10);

acc.setType("Saving");
acc.withdraw(10);


printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const currencies = {
  NOK: { value: 1.0000, name: "Norske kroner", denomination: "kr" },
  EUR: { value: 0.93, name: "Europeiske euro", denomination: "€" },
  USD: { value: 1.02, name: "United States dollar", denomination: "$" },
  GBP: { value: 0.80, name: "Pound sterling", denomination: "£" },
  INR: { value: 84.50, name: "Indiske rupee", denomination: "र" },
  AUD: { value: 1.60, name: "Australiske dollar", denomination: "A$" },
  PHP: { value: 57.00, name: "Filipinske peso", denomination: "₱" },
  SEK: { value: 11.20, name: "Svenske kroner", denomination: "kr" },
  CAD: { value: 1.38, name: "Canadiske dollar", denomination: "C$" },
  TBH: { value: 36.00, name: "Thai bath", denomination: "฿" }
};

class Account {
  #type;
  #balance = 0;
  #withdrawCount = 0;
  #currencyType = "NOK";

  constructor(type) {
    this.#type = type;
  }

  publicToString() {
    const currency = currencies[this.#currencyType];
    return `Account type: ${this.#type}, Balance: ${this.#balance}${currency.denomination}`;
  }

  publicSetType(aType) {
    this.#type = aType;
  }

  publicGetBalance() {
    return this.#balance;
  }

  publicDeposit(aAmount) {
    this.#balance += aAmount;
    const currency = currencies[this.#currencyType];
    printOut(`Deposit of ${aAmount}${currency.denomination} new balance is ${this.#balance}${currency.denomination}`);
  }

  publicWithdraw(aAmount) {
    if (aAmount > this.#balance) return;
    this.#balance -= aAmount;
    this.#withdrawCount++;
  }

  publicSetCurrencyType(aType) {
    if (this.#currencyType === aType) return;
    if (!currencies[aType]) return;
    this.#currencyType = aType;
  }
}

const account = new Account("Savings");
account.publicDeposit(150);

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const currencyTypes = {
  NOK: { value: 1.0, name: "Norske kroner", denomination: "kr" },
  SEK: { value: 0.9744047619, name: "Svenske Kroner", denomination: "kr" },
  USD: { value: 9.386585366, name: "United States dollar", denomination: "$" }
};

function currencyConvert(currentType, newType, amount) {
  return (currencyTypes[currentType].value / currencyTypes[newType].value) * amount;
}

class AccountV2 {
  #balance = 0;
  #currencyType = "NOK";

  deposit(amount) {
    this.#balance += amount;
    const curr = currencyTypes[this.#currencyType];
    printOut(`Deposit of ${amount.toFixed(2)}${curr.denomination} new balance is ${this.#balance.toFixed(2)}${curr.denomination}`);
  }

  setCurrencyType(newType) {
    if (this.#currencyType === newType) return;
    if (!currencyTypes[newType]) return;

    const oldCurrency = currencyTypes[this.#currencyType];
    const newCurrency = currencyTypes[newType];

    this.#balance = currencyConvert(this.#currencyType, newType, this.#balance);
    this.#currencyType = newType;

    printOut(`The account currency has changed from ${oldCurrency.name} to ${newCurrency.name}`);
    printOut(`New balance is ${this.#balance.toFixed(2)}${newCurrency.denomination}`);
  }

  getBalance() {
    const curr = currencyTypes[this.#currencyType];
    return `${this.#balance.toFixed(2)}${curr.denomination}`;
  }
}

const accountV2 = new AccountV2();

accountV2.deposit(150);
accountV2.setCurrencyType("SEK");
accountV2.setCurrencyType("USD");
accountV2.setCurrencyType("NOK");

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const currencyTypesV3 = {
  NOK: { value: 1.0, name: "Norske Kroner", denomination: "kr" },
  USD: { value: 21.662, name: "United States Dollar", denomination: "$" },
  GBP: { value: 14.188, name: "Pound Sterling", denomination: "£" },
  CAD: { value: 6.96, name: "Canadiske dollar", denomination: "C$" },
  INR: { value: 0.01828, name: "Indiske rupee", denomination: "र" },
  SEK: { value: 0.9744, name: "Svenske kroner", denomination: "kr" }
};

function currencyConvertV3(currentType, newType, amount) {
  return (currencyTypesV3[currentType].value / currencyTypesV3[newType].value) * amount;
}

class AccountV3 {
  #type;
  #balance = 0;
  #withdrawCount = 0;
  #currencyType = "NOK";

  constructor(type) { this.#type = type; }

  deposit(amount, currencyType2 = "NOK") {
    const convertedAmount = currencyConvertV3(currencyType2, this.#currencyType, amount);
    this.#balance += convertedAmount;
    printOut(`Deposit of ${amount.toFixed(2)} ${currencyTypesV3[currencyType2].name}, new balance is ${this.#balance.toFixed(2)}${currencyTypesV3[this.#currencyType].denomination}`);
  }

  withdraw(amount, currencyType2 = "NOK") {
    const convertedAmount = currencyConvertV3(currencyType2, this.#currencyType, amount);
    if (convertedAmount > this.#balance) {
      printOut(`Insufficient funds to withdraw ${amount.toFixed(2)} ${currencyTypesV3[currencyType2].name}`);
      return;
    }
    this.#balance -= convertedAmount;
    this.#withdrawCount++;
    printOut(`Withdrawal of ${amount.toFixed(2)} ${currencyTypesV3[currencyType2].name}, new balance is ${this.#balance.toFixed(2)}${currencyTypesV3[this.#currencyType].denomination}`);
  }

  setCurrencyType(newType) {
    if (this.#currencyType === newType || !currencyTypesV3[newType]) return;
    const oldCurrency = currencyTypesV3[this.#currencyType];
    const newCurrency = currencyTypesV3[newType];
    this.#balance = currencyConvertV3(this.#currencyType, newType, this.#balance);
    this.#currencyType = newType;
    printOut(`The account currency has changed from ${oldCurrency.name} to ${newCurrency.name}`);
    printOut(`New balance is ${this.#balance.toFixed(2)}${newCurrency.denomination}`);
  }

  getBalance() { return `${this.#balance.toFixed(2)}${currencyTypesV3[this.#currencyType].denomination}`; }

  toString() { return `Account type: ${this.#type}, Balance: ${this.getBalance()}, Currency: ${this.#currencyType}`; }
}

const accountV3 = new AccountV3("Multi-Currency");

accountV3.deposit(12, "USD");
accountV3.withdraw(10, "GBP");
accountV3.setCurrencyType("CAD");
accountV3.setCurrencyType("INR");
accountV3.withdraw(150.11, "SEK");

printOut(newLine);
