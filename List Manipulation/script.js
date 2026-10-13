
// const list = document.querySelector("#list"); // first way to catch ul from html
const list = document.getElementById("list"); // global variable

function read(){
    const items = list.getElementsByTagName("li");//access only the elements inside the ul that have id list
    // const items = document.getElementsByTagName("li"); // this access all the li's from all ul's in the website
    // console.log(items);

    // items now is html collection "like array but not array" we need we can't say items.forEach... we can:

    // Array.from(items).forEach

    // or

    [...items].forEach(function(item){
        // console.log(item)
        console.log(item.innerHTML);
    });

}



function insetLast(){
    const content = document.getElementById("input1").value;
    const newElement = document.createElement("li");
    newElement.innerHTML = content;
    list.appendChild(newElement);
    content.value = "";
}


function deleteAll(){
    while(list.firstChild){ //or firstElementChild
        list.removeChild(list.firstChild);
    }
}


function deleteAtIndex(){
    const index = document.getElementById("input2").value;
    if( index >=0 && index< list.children.length){
        list.removeChild(list.children[index]);
    }
}



function insertAtIndex(){
    const content = document.getElementById("input1").value;
    const index = document.getElementById("input3").value;

    const newElement = document.createElement("li");
        if( index >=0 && index< list.children.length){
        const referenceElement = list.children[index];
        newElement.innerHTML = content;
        list.insertBefore(newElement , referenceElement);
        //OR list.insertBefore(newElement , list.children[index]);
    }
}




function sortList () {
    const items = list.getElementsByTagName("li");
    let newList = [];
    [...items].forEach((item) =>{
        newList.push(item.innerHTML);
    });

    let sortedList = newList.sort();
    deleteAll();
    
    sortedList.forEach((item) =>{
        const newElement = document.createElement("li");
        newElement.innerHTML = item;
        list.appendChild(newElement);
    });
}