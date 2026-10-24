
fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(users => {

    users.forEach( user => {
        console.log(user);

        const usersList = document.getElementById("usersList");

        const newItem = document.createElement("li");

        newItem.textContent = "Name is " + user.name + " email is " + user.email + " and the city is " + user.address.street;

        usersList.appendChild(newItem);
    });
});