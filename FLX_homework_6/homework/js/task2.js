let money = Number(prompt('Enter amount of money:', ''));
let discount = Number(prompt('Enter discount:', ''));
let result = money * discount / 100;
let saved = money - result;

if (isNaN(money) || isNaN(discount)) {
    alert('Invalid input data');
} else if (money < 0 || money > 9999999) {
    alert('Money should be in range 0 to 9999999');
} else if (discount < 0 || discount > 99) {
    alert('Discount should be in range 0 to 99');
} else {
    alert('Price without discount: ' + +money.toFixed(2) + '\n' +
        'Discount: ' + +discount.toFixed(2) + '%' + '\n' +
        'Price with discount: ' + +saved.toFixed(2) + '\n' +
        'Saved: ' + +result.toFixed(2));
}