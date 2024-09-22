//* 1
const bankAccount = {
  ownerName: "Anna Havrylova",
  accountNumber: 777,
  balance: 1000,
  deposit(money) {
    this.balance += money;
    return this.balance;
  },
  withdraw(money) {
    this.balance -= money;
    return this.balance;
  },
};
const workWithAccount = () => {
  const makeDeposit = confirm("Do you want to make deposit?");
  if (makeDeposit) {
    const balance = bankAccount.deposit(
      Number.parseInt(prompt("How many do you want?"))
    );
    alert(balance);
  }
  const makeWithdraw = confirm("Do you want to make withdraw?");
  if (makeWithdraw) {
    const balance = bankAccount.withdraw(
      Number.parseInt(prompt("How many do you want?"))
    );
    alert(balance);
  }
};
workWithAccount();
//* 2
const weather = {
  temperature: prompt("Enter temperature"),
  humidity: 1,
  windSpeed: 40,
  isTemperatureNegative() {
    let isTemperatureNegative = this.temperature < 0 ? true : false;
    return isTemperatureNegative;
  },
};

if (weather.isTemperatureNegative()) {
  console.log("температура нижча 0 градусів Цельсія");
} else {
  console.log("температура виша або дорівнює 0 градусів Цельсія");
}
//* 3
const user = {
  name: prompt("Enter your name"),
  email: prompt("Enter your email"),
  password: prompt("Enter your password"),
  login() {
    const userEmail = prompt("Enter your email");
    const userPassword = prompt("Enter your password");
    let message = "";
    if (userEmail !== this.email) {
      message = "Email is uncorrect";
    } else if (userPassword !== this.password) {
      message = "Password is uncorrect";
    } else {
      message = "Ви успішно залогінились";
    }
    return message;
  },
};
alert(user.login());
//* 4
const movie = {
  title: "Harry Potter 1",
  director: "Cris Kalambus",
  year: 2001,
  rating: 8.2,
  checkMovieRating() {
    let message = "Фільм поганий";
    if (this.rating > 8) {
      message = "Фільм хороший";
    }
    return message;
  },
};
console.log(movie.checkMovieRating());
