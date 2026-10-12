
function changeTitle(){
    const pgTitle = document.getElementById("list");
        // console.log(pgTitle);// click on the button it will return reference to the element not string

        // here when we click the button it delete the li's inside the ul and replace them by the following text
        pgTitle.innerHTML = "Hello Mohammad !"; // innerHtml in the text between the opening tag and closing tag
}
