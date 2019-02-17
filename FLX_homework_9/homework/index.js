//Task1
function findTypes(parameter) {
  let findTypes = typeof parameter;
  return findTypes;
}

findTypes('number');

//Task2
function executeforEach(myArr, myFunc) {
  for (let i = 0; i < myArr.length; i++) {
    myFunc(myArr[i]);
  }
}

executeforEach([1, 2, 3], function (el) {
  console.log(el)
});

//Task3
function mapArray(newArr, myFunc) {
  let anotherArray = [];
  executeforEach(newArr, function (el) {
    anotherArray.push(myFunc(el));
  });

  return anotherArray;
}

mapArray([2, 5, 8], function (el) {
  return el + 3
});

//Task4
function filterArray(myArr, myFunc) {
  let anotherArray = [];
  executeforEach(myArr, function (el) {
    if (myFunc(el)) {
      anotherArray.push(el);
    }
  });
  return anotherArray;
}

filterArray([2, 5, 8], function (el) {
  return el > 3
});

//Task5
function getAmountOfAdultPeople(data) {
  let filteredPeople = filterArray(data, function (el) {
    return el.age > 18;
  });

  return filteredPeople.length;
}

getAmountOfAdultPeople([{
    "_id": "5b5e3168c6bf40f2c1235cd6",
    "index": 0,
    "age": 39,
    "eyeColor": "green",
    "name": "Stein",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5b5e3168e328c0d72e4f27d8",
    "index": 1,
    "age": 38,
    "eyeColor": "blue",
    "name": "Cortez",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5b5e3168cc79132b631c666a",
    "index": 2,
    "age": 2,
    "eyeColor": "blue",
    "name": "Suzette",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5b5e31682093adcc6cd0dde5",
    "index": 3,
    "age": 19,
    "eyeColor": "green",
    "name": "George",
    "favoriteFruit": "banana"
  }
]);

//task6
function getGreenAdultBananaLovers(data) {
  let filteredPeople = filterArray(data, function (el) {
    return el.age >= 18 && el.favoriteFruit === 'banana' && el.eyeColor === 'green';
  });
  return mapArray(filteredPeople, function (el) {
    return el.name;
  });
}

getGreenAdultBananaLovers([{
    "_id": "5b5e3168c6bf40f2c1235cd6",
    "index": 0,
    "age": 39,
    "eyeColor": "green",
    "name": "Stein",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5b5e3168e328c0d72e4f27d8",
    "index": 1,
    "age": 38,
    "eyeColor": "blue",
    "name": "Cortez",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5b5e3168cc79132b631c666a",
    "index": 2,
    "age": 2,
    "eyeColor": "blue",
    "name": "Suzette",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5b5e31682093adcc6cd0dde5",
    "index": 3,
    "age": 19,
    "eyeColor": "green",
    "name": "George",
    "favoriteFruit": "banana"
  }
]);

//Task7
function keys(object) {
  let keysOfObject = [];
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      keysOfObject.push(key);
    }
  }
  return keysOfObject;
}

keys({
  keyOne: 1,
  keyTwo: 2,
  keyThree: 3
});

//Task8
function values(object) {
  let valuesOfObject = [];
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      valuesOfObject.push(object[key]);
    }
  }
  return valuesOfObject;
}

values({
  keyOne: 1,
  keyTwo: 2,
  keyThree: 3
});

//Task9
function showFormattedDate(date) {
  let shortedMonthsNames = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];
  return `Date: ${date.getDate()} of ${shortedMonthsNames[date.getMonth()]}, ${date.getFullYear()}`;
}

showFormattedDate(new Date('2019-01-27T01:10:00'));

//Task10
function isEvenYear(date) {
  let year = date.getFullYear();
  return year % 2 === 0;
}

isEvenYear(new Date('2019-01-27T01:10:00'));

//Task11
function isEvenMonth(date) {
  let month = date.getMonth() + 1;
  return month % 2 === 0;
}

isEvenMonth(new Date('2019-02-27T01:10:00'));