class User {
    constructor(name, orderTotalPrice, weekendDiscount, nightDiscount, bonus) {
      this.name = name;
      this.orderTotalPrice = orderTotalPrice;
      this.weekendDiscount = weekendDiscount;
      this.nightDiscount = nightDiscount;
      this.bonus = bonus;
    }
  
    makeOrder() {
      const discountedPrice = this.orderTotalPrice - this.nightDiscount - this.weekendDiscount;
      return `Price after discount and including bonuses is ${discountedPrice - this.bonus} uah.`;
    }
  }
  
  function getDiscount(user) {
    let date = new Date();
    if (date.getHours() >= 23 || date.getHours() <= 6 && date.getDay() === 6 || date.getDay() === 0) {
      if (user.weekendDiscount > user.nightDiscount) {
        return `Congratlations! You have discount ${user.weekendDiscount} uah.`;
      } else if (user.weekendDiscount < user.nightDiscount) {
        return `Congratlations! You have discount ${user.nightDiscount} uah.`;
      } else {
        return `Congratlations! You have discount ${user.nightDiscount || user.weekendDiscount} uah.`;
      }
    } else if (date.getDay() === 6 || date.getDay() === 0) {
      user.discount = user.weekendDiscount;
      user.nightDiscount = 0;
      return `Congratulations! You have weekend discount ${user.discount} uah.`;
    } else if (date.getHours() >= 23 || date.getHours() <= 6) {
      user.discount = user.nightDiscount;
      user.weekendDiscount = 0;
      return `Congratulations! You have night discount ${user.discount} uah.`;
    } else {
      return `Sorry, you can have discount only on weekends or at night time(23:00 - 6:00).`;
    }
  }
  
  function setBonus(user) {
    let totalBonus = parseInt(user.orderTotalPrice / 100).toFixed(0);
    user.bonus = totalBonus * 5;
    return `Your bonus is ${user.bonus} uah.`;
  }
  
  const sasha = new User('Sasha', 1257, 99, 50, 0);
  getDiscount(sasha);
  setBonus(sasha);
  sasha.makeOrder();
//   console.log(getDiscount(sasha));
//   console.log(setBonus(sasha));
//   console.log(sasha.makeOrder());