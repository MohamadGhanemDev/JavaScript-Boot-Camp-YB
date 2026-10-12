//go to the consol print document , document is an object "document object model" we can access any element in our html via JavaScript

// const btn1 = document.getElementById("button1");// no need to catch the button by id to access the onclick

function changeTitle(){
    const pgTitle = document.getElementById("pageTitle");
        console.log(pgTitle);// click on the button it will return reference to the element not string
        pgTitle.innerHTML = "Hello Mohammad !"; // innerHTML in the text between the opening tag and closing tag
}

function hideAll(){
    const cntr = document.getElementById("container");
    cntr.style.display = "none";
}

function showAll(){
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

const pageTitle = document.getElementById("pageTitle");
function changeToRed(){
    pageTitle.style.color = "red";
}
function changeToGreen(){
    pageTitle.style.color = "green";
}
function changeToBlue(){
    pageTitle.style.color = "blue";
}




const body = document.getElementById("body");// or document.body if we don't need to give the body id in html
const modeBtn = document.getElementById("modeBtn");
// console.log(modeBtn);
// console.log(body);
function switchDarkLightMode(){
    if(modeBtn.innerText === "Dark Mode"){// better to bake it with boolean let isDark = false;
        body.style.backgroundColor = "black";
        body.style.color = "white";

        modeBtn.innerText = "Light Mode";
    }else{
        body.style.backgroundColor = "white";
        body.style.color = "black";

        modeBtn.innerText = "Dark Mode";
    }
}

const inp1 = document.getElementById("inp1");
// console.log(inp1.value);
function changeTitleFromInput(){
    // pageTitle.innerHTML = inp1.value ;  this one is risky 
    pageTitle.textContent = inp1.value ;
    inp1.value = "";
}




const btnColor = document.getElementsByClassName("btn-color");
console.log(btnColor[0]);
function changeBtnColor(){

    // if(body.style.backgroundColor =="white"){ orrr
    if(body.style.backgroundColor !="black"){
        for(let i = 0 ; i < btnColor.length ; i++){
            btnColor[i].style.backgroundColor= "black";
            btnColor[i].style.color= "white";
            btnColor[i].style.border = "1px solid black";
        }
    }else{
        for(let i = 0 ; i < btnColor.length ; i++){
            btnColor[i].style.backgroundColor= "white";
            btnColor[i].style.color= "black";
            btnColor[i].style.border = "1px solid white";
        }
    }
}



/* Claud Recommendations

hideAll, ShowAll, and toggle all re-fetch container. You can grab it once at the top, like you did with pageTitle.
Cleaner approach: CSS classes instead of inline styles

Setting many style.x values in JS gets messy. Toggle a class instead:

css
body.dark { background: black; color: white; }
body.dark .btn-color { background: black; color: white; border: 1px solid black; }
.hidden { display: none; }
javascript
function switchDarkLightMode() {
    const isDark = document.body.classList.toggle("dark"); // returns true if added
    modeBtn.innerText = isDark ? "Light Mode" : "Dark Mode";
}

function toggle() {
    container.classList.toggle("hidden"); // works on the first click, no default needed
}

This removes the first-click bug, the innerText check, and the whole changeBtnColor() loop.


Quick reference
Situation	Use
Change text from user input	textContent
Insert real HTML you wrote yourself	innerHTML
Read the actual current style (even from CSS)	getComputedStyle(el).display
Switch between two looks	classList.toggle("name")
Track on/off state	a boolean variable, not button text
Select many elements	querySelectorAll(".btn-color").forEach(...)
Compare values	===
*/
