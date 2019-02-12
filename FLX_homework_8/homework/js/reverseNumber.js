function reverseNumber(number) {
    return Math.abs(number).toString().split('').reverse().join('') * Math.sign(number);
}
reverseNumber();