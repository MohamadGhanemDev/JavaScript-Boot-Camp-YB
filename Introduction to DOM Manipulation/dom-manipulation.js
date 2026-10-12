//go to the consol print document , document is an object "document object model" we can access any element in our html via JavaScript

// const btn1 = document.getElementById("button1"); no need to catch the button by id to access the onclick

function changeTitle(){
    const pgTitle = document.getElementById("pageTitle");
        console.log(pgTitle);// click on the button it will return reference to the element not string
        pgTitle.innerHTML = "Hello Mohammad !"; // innerHtml in the text between the opening tag and closing tag
}

function hideAll(){
    const cntr = document.getElementById("container");
    cntr.style.display = "none";
}

function ShowAll(){
    const container = document.getElementById("container");
    container.style.display = "block";
}

function toggle(){
    const container = document.getElementById("container");

    //this code i need to click toggle two times to start working , because there is no default display , so the first time i click on toggle it give the div display block "by the way we now its block but the function the display value not initialized" because this function don't even know what's the default display value of it
    // if(container.style.display == "block"){
    //     container.style.display = "none";
    // }else {// this code will jump to the else because no default value if we need to see how the code works in the browser go inspect elements and select Sources then select the line number "put break point this means do this code reach here?" 
    //     container.style.display = "block";
    // }

    if(container.style.display == "none"){
        container.style.display = "block";
    }else {
        container.style.display = "none";// here at the first time click the default display changed to none then the clicks swap between display none and block
    }

}