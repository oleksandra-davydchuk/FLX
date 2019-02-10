let login = prompt('Enter your login:', 'Login')
let time = new Date().getHours();
let userPassword = 'UserPass';
let adminPassword = 'RootPass';

if (login === 'User') {
    let password = prompt('Enter your password:', 'Password');
    if (password === userPassword) {
        alert(time < 20 ? 'Good day, dear User!' : 'Good evening,  dear User!');
    } else if (password === '') {
        alert('Canceled.');
    } else if (password !== userPassword) {
        alert('Wrong password');
    }
} else if (login === 'Admin') {
    let password = prompt('Enter your password:', 'Password');
    if (password === adminPassword) {
        alert(time < 20 ? 'Good day, dear Admin!' : 'Good evening,  dear Admin!');
    } else if (password === '') {
        alert('Canceled.');
    } else if (password !== adminPassword) {
        alert('Wrong password');
    }
} else {
    if (login === '' || login === null) {
        alert('Canceled.');
    } else if (login.length < 4) {
        alert('I don`t know any users having name length less than 4 symbols');
    } else {
        alert('I don`t know you');
    }
}