let unorderedList = document.createElement("ul");
document.body.appendChild(unorderedList);
let listItem1 = document.createElement("li");
listItem1.textContent = "It's free";
let listItem2 = document.createElement("li");
listItem2.textContent = "It's awesome";
unorderedList.appendChild(listItem1);
unorderedList.appendChild(listItem2);

const h1 = document.querySelector("h1");
h1.style.color = "blue"