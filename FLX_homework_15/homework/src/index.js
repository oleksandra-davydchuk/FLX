function Company({
  name,
  owner,
  maxCount
} = {}) {
  this.name = name;
  this.owner = owner;
  this.maxCount = maxCount;
  let _date = new Date();
  let _employees = [];
  let _historyLogs = [];
  let zero = 0;

  _historyLogs.push(`${this.name} was created by ${this.owner} in ${_date}`);

  this.addNewEmployee = function(employee) {
    if (employee instanceof Employee) {
      if (_employees.length === maxCount) {
        let employeeWithTheLowestSalary = _employees.slice().sort((employee1, employee2) =>
          employee1.salary - employee2.salary)[zero];
        let index = _employees.indexOf(employeeWithTheLowestSalary);
        this.removeEmployee(index);
      }
      _employees.push(employee);
      employee.hire(this.name);
      _historyLogs.push(`${employee.name} starts working at ${this.name} in ${_date}.`);
    } else {
      console.log('Please, try to add employee instance.');
    }
  }

  this.removeEmployee = function(index) {
    let one = 1;
    if (isFinite(index)) {
      _historyLogs.push(`${_employees[index].name} ends from ${this.name} in ${_date}`);
      _employees[index].fire(this.name);
      _employees.splice(index, one);
    } else {
      return `Please, change id to valid.`
    }
  }

  this.getAverageSalary = () => {
    let sumSalary = zero;

    if (_employees.length > zero) {
      _employees.forEach(function(employee) {
        sumSalary += employee.salary;
      });
    }
    return `Average salary of employees is ${(sumSalary / _employees.length)}.`;
  }

  this.getEmployees = () => _employees;

  this.getFormattedListOfEmployees = function() {
    return _employees.map(function(employee) {
      return `${employee.name} works in ${name} ${employee.getWorkTimeInSeconds()} seconds.`;
    });
  }

  this.getAverageAge = () => {
    let two = 2;
    let sumAge = 0;
    if (_employees.length > zero) {
      _employees.forEach(function(employee) {
        sumAge += employee.age;
      });
    }
    return `Average age of employees is ${(sumAge / _employees.length).toFixed(two)}.`;
  }

  this.getHistory = () => {
    return _historyLogs;
  }
}

function Employee({
  name,
  age,
  salary,
  primarySkill
} = {}) {
  this.name = name;
  this.age = age;
  this.salary = salary;
  this.primarySkill = primarySkill;
  let _date = new Date();
  let _dateOfHire = 0;
  let _historyLogs = [];
  this.company = null;

  this.getSalary = () => {
    return `${this.name}'s salary is ${this.salary}.`;
  }

  this.setSalary = function(newSalary) {
    if (newSalary > this.salary && !isNaN(newSalary) && isFinite(newSalary)) {
      _historyLogs.push(`Change salary from ${this.salary} to ${newSalary}`);
      console.log(`Change ${this.name}'s salary from ${this.salary} to ${newSalary}.`);
      this.salary = newSalary;

    } else if (newSalary < this.salary && !isNaN(newSalary)) {
      _historyLogs.push(`Try to change salary from ${this.salary}.`);
      console.log(`You can't change salary from higher to lower. Try to change salary from ${this.salary}.`);
    } else {
      console.log(`You can't change salary. Entered salary is invalid.`);
    }
  }

  this.getWorkTimeInSeconds = () => {
    let thousand = 1000;
    if (this.company) {
      return (_date - _dateOfHire) / thousand;
    } else {
      return `${this.name} is not working now.`
    }
  }

  this.hire = function(companyName) {
    this.company = companyName;
    _historyLogs.push(`${this.name} is hired to ${this.company} in ${_date}`);
  }

  this.fire = function(companyName) {
    _historyLogs.push(`${this.name} is fired from ${this.company} in ${_date}`);
    this.company = null;
  }

  this.getHistory = () => {
    return _historyLogs;
  }
}

// let epam = new Company({
//   name: "Epam",
//   owner: "Arkadii",
//   maxCount: 5
// });

// let artem = new Employee({
//   name: "Artem",
//   age: 15,
//   salary: 1000,
//   primarySkill: "UX"
// });

// let vova = new Employee({
//   name: "Vova",
//   age: 16,
//   salary: 2000,
//   primarySkill: "BE"
// });

// let vasyl = new Employee({
//   name: "Vasyl",
//   age: 25,
//   salary: 1000,
//   primarySkill: "FE"
// });

// let ivan = new Employee({
//   name: "Ivan",
//   age: 35,
//   salary: 5000,
//   primarySkill: "FE"
// });

// let orest = new Employee({
//   name: "Orest",
//   age: 29,
//   salary: 300,
//   primarySkill: "AT"
// });

// let anton = new Employee({
//   name: "Anton",
//   age: 19,
//   salary: 500,
//   primarySkill: "Manager"
// });

// epam.addNewEmployee(artem);
// epam.addNewEmployee(vova);
// epam.addNewEmployee(vasyl);
// epam.addNewEmployee(ivan);
// epam.addNewEmployee(orest);
// epam.addNewEmployee(anton);
// console.log(epam.getHistory());
// epam.addNewEmployee(5, 6, 9, 5);
// console.log(epam.removeEmployee(2));
// console.log(vasyl.getHistory());
// console.log(epam.getAverageSalary());
// console.log(epam.getEmployees());
// console.log(epam.getFormattedListOfEmployees());
// console.log(epam.getAverageAge());

// console.log(anton.getSalary());
// console.log(anton.setSalary(700));
// console.log(vova.getWorkTimeInSeconds());
// console.log(vasyl.getWorkTimeInSeconds());