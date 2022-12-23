/*
let unorderedList = document.createElement("ul");
document.body.appendChild(unorderedList);
let listItem1 = document.createElement("li");
listItem1.textContent = "It's free";
let listItem2 = document.createElement("li");
listItem2.textContent = "It's awesome";
unorderedList.appendChild(listItem1);
unorderedList.appendChild(listItem2);

const h1 = document.querySelector("h1");
h1.style.color = "blue";
*/

const fruits = new Map([
    ["apples", 500],
    ["bananas", 600],
    ["oranges", 900]
  ]);
document.getElementById("demo").innerHTML = fruits.get("apples");

async function getUsers() {
    let url = 'users.json';
    try {
        let res = await fetch(url);
        console.log(res.status);
        console.log(res.statusText);
        return await res.json();
    } catch(error){
        console.log(error);
    }
}

async function renderUsers() {
    let users = await getUsers();
    let html = '';
    users.forEach(user => {
        let htmlSegment = `<div class= "user">
        <img src = "${user.profileURL}">
        <h2>${user.firstName} ${user.lastName}</h2>
        <div class = "email"><a href = "email:${user.email}">${user.email}</a></div>
        </div>`;

        html += htmlSegment;
    });
    
    let container = document.querySelector('.container');
    container.innerHTML = html;
    
    
}
renderUsers();



/*
let response = fetch(url);

fetch(url)
    .then(response => {
        //handle the response
    })

    .catch(error => {
        //handle the error
    });
*/


/* Just for the practice
fetchText();

async function fetchText(){
    let response = await fetch('/readme.txt');
    console.log(response.status);
    console.log(response.statusText);

    if(response.status === 200){
        let data = await response.text();
        //handle data
    }
}
*/
