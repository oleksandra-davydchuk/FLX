const div = document.getElementById('container');
const posts = document.getElementById('posts');

let request = new XMLHttpRequest();
request.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
request.onreadystatechange = function() {
  if ((request.readyState === 4) && (request.status === 200)) {
    let data = JSON.parse(request.responseText);
    for (i = 0; i < 10; i++) {
      const cardUser = document.createElement('div');
      const img = document.createElement('img');
      img.setAttribute('src', 'https://cataas.com/cat');
      img.setAttribute('border', '1px solid black');
      img.setAttribute('width', '130px');
      img.setAttribute('height', '100px');
      div.appendChild(cardUser);
      cardUser.appendChild(img);
      const user = document.createElement('p');
      cardUser.appendChild(user);
      const userName = document.createTextNode('Username: ');
      user.appendChild(userName);
      const userNameLink = document.createElement('a');
      user.appendChild(userNameLink);
      const userLink = document.createTextNode(`${data[i].username}`);
      userNameLink.appendChild(userLink);
      userNameLink.onclick = () => {
        getPosts();
        getComments();
        setHidden();
      }

      function setHidden() {
        div.style.display = 'none';
      }
      const userStreet = document.createElement('p');
      cardUser.appendChild(userStreet);
      const street = document.createTextNode('Street: ');
      userStreet.appendChild(street);
      const streetName = document.createTextNode(`${data[i].address.street}`);
      userStreet.appendChild(streetName);
      const userSuite = document.createElement('p');
      cardUser.appendChild(userSuite);
      const suite = document.createTextNode('Suite: ');
      userSuite.appendChild(suite);
      const suiteName = document.createTextNode(`${data[i].address.suite}`);
      userSuite.appendChild(suiteName);
      const userCity = document.createElement('p');
      cardUser.appendChild(userCity);
      const city = document.createTextNode('City: ');
      userCity.appendChild(city);
      const cityName = document.createTextNode(`${data[i].address.city}`);
      userCity.appendChild(cityName);
      const userCompany = document.createElement('p');
      cardUser.appendChild(userCompany);
      const company = document.createTextNode('Company: ');
      userCompany.appendChild(company);
      const companyName = document.createTextNode(`${data[i].company.name}`);
      userCompany.appendChild(companyName);
      const buttonDiv = document.createElement('div');
      const editButton = document.createElement('button');
      const editButtonName = document.createTextNode('Edit');
      const deleteButton = document.createElement('button');
      const deleteButtonName = document.createTextNode('Delete');
      cardUser.appendChild(buttonDiv);
      buttonDiv.appendChild(editButton);
      editButton.appendChild(editButtonName);
      buttonDiv.appendChild(deleteButton);
      deleteButton.appendChild(deleteButtonName);
      deleteButton.onclick = () => {
        cardUser.style.display = 'none';
      }
    }
  }
}
request.send();

function getPosts() {
  let getPosts = new XMLHttpRequest();
  getPosts.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
  getPosts.onreadystatechange = function() {
    if ((getPosts.readyState === 4) && (getPosts.status === 200)) {
      let data = JSON.parse(getPosts.responseText);
      for (i = 0; i < 10; i++) {
        const postDiv = document.createElement('div');
        const userPostTitle = document.createElement('h3');
        const postTitle = document.createTextNode(`${data[i].title}`);
        const userPostBody = document.createElement('p');
        const postBody = document.createTextNode(`${data[i].body}`);
        posts.appendChild(postDiv);
        postDiv.appendChild(userPostTitle);
        userPostTitle.appendChild(postTitle);
        postDiv.appendChild(userPostBody);
        userPostBody.appendChild(postBody);
      }
    }
  }
  getPosts.send();
}

function getComments() {
  let getComments = new XMLHttpRequest();
  getComments.open('GET', 'https://jsonplaceholder.typicode.com/comments', true);
  getComments.onreadystatechange = function() {
    if ((getComments.readyState === 4) && (getComments.status === 200)) {
      let data = JSON.parse(getComments.responseText);
      for (i = 0; i < 5; i++) {
        const commentDiv = document.createElement('div');
        const commentImg = document.createElement('img');
        const userCommentName = document.createElement('p');
        const userCommentNameValue = document.createTextNode(`${data[i].name}`);
        const userCommentEmail = document.createElement('p');
        const userCommentEmailValue = document.createTextNode(`${data[i].email}`);
        const userCommentBody = document.createElement('p');
        const userCommentBodyValue = document.createTextNode(`${data[i].body}`);
        posts.appendChild(commentDiv);
        commentDiv.appendChild(commentImg);
        commentDiv.appendChild(userCommentName);
        userCommentName.appendChild(userCommentNameValue);
        commentDiv.appendChild(userCommentEmail);
        userCommentEmail.appendChild(userCommentEmailValue);
        commentDiv.appendChild(userCommentBody);
        userCommentBody.appendChild(userCommentBodyValue);
      }
    }
  }
  getComments.send();
}