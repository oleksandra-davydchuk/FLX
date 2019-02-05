let a = parseFloat(prompt('Enter value of a: ', ''));
let b = parseFloat(prompt('Enter value of b: ', ''));
let c = parseFloat(prompt('Enter value of c: ', ''));
let discriminant = Math.pow(b, 2) - 4 * a * c;

function quadraticEquation() {
    let x = (-b / 2) * a;
    let value1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let value2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    if (isNaN(a) || isNaN(b) || isNaN(c) || a === 0) {
        return 'Invalid input data';
    }
    if (discriminant < 0) {
        return 'No solution';
    }
    if (discriminant === 0) {
        return 'x = ' + x;
    } else {
        return 'x1 = ' + value1 + ' and x2 = ' + value2;
    }
}
alert(quadraticEquation());