const list = document.getElementById("list");//obj
const items = list.getElementsByTagName("li");//html collection
const error = document.getElementById("error");

function readLi(){
    // these two lines give the same thing html collection
    console.log(list.children);
    // console.log(items);
}

function readTextInsideLi(){
    [...list.getElementsByTagName("li")].forEach((item)=>{
        console.log(item.innerHTML);
    });
}



function insertLast(){
    const input1 = document.getElementById("input1");
    const inpVal = input1.value.trim();

    if(inpVal == ""){
        error.innerHTML = "ERROR: You Can't Enter Empty Data..";
        return;
    }

    let isExist = false;

        [...items].forEach((item)=>{
            if(item.textContent.toLowerCase() == inpVal.toLowerCase()){
                isExist = true;
            }
        });
    
    if(isExist){
        error.innerHTML = "ERROR: Already Exist..";
        input1.value = "";
        return;
    }

        const newItem = document.createElement("li");
            // newItem.innerHTML = inpVal;//allow user to enter html code like <b>hii</b>
            newItem.textContent= inpVal;
        list.appendChild(newItem);
        error.innerHTML = "";
        input1.value = "";
}



function deleteAll(){
    [...items].forEach((item)=>{
        list.removeChild(item);
    });

    // list.innerHTML = ""; or simply this line do the above
}



function deleteByIndex(){
    const input2 = document.getElementById("input2");
        // console.log(input2.value);
    if(list.children.length == 0  || input2.value ==0){
        error.innerHTML = " Error: There is No Elements to delete !"
        return;
    }
    if(input2.value <0 || input2.value > list.children.length){
        error.innerHTML = "ERROR: Invalid Value";
        input2.value="";
        return;
    }
        error.innerHTML = "";
        list.removeChild(list.children[input2.value - 1]);
}



function insertAtIndex(){
    const input3 = document.getElementById("input3");
    const input4 = document.getElementById("input4");

    if(input3.value <1 || input3.value> list.children.length+1 ){
        error.innerHTML = "ERROR Invalid Index";
        input3.value="";
        input4.value="";
        return;
    }
    if(input4.value==""){
        error.innerHTML = "Error: Invalid Value";
        input3.value="";
        input4.value="";
        return
    }

    for(let i = 0; i < items.length; i++){
        if(items[i].innerHTML.toLowerCase() == input4.value.toLowerCase().trim()){
            document.getElementById("error").innerHTML = "already exist";
            input3.value="";
            input4.value="";
            return;
        }
    }

    const newItem = document.createElement("li");
    // const storedItem = list.children[input3.value];//this works at index if i select 2 it will be inserted at third one
    // const storedItem = list.children[input3.value +1 ];//input here is string and + so if we enter 2 so its "2"+1=21 undefined index so it putted at the end of the list 
    // const storedItem = list.children[Number(input3.value)+1];// index-based like children[input3.value], but +1 shifts it one spot later: input 2 → lands at index 3 (4th li)
    // const storedItem = list.children[input3.value - 1 ];// this is when i want to start count li's from 1 
    const storedItem = list.children[Number(input3.value) - 1 ];// also this is when i want to start count li's from 1 
    newItem.innerHTML = input4.value;
    // list.children[input3.value] = newItem;
    // list.insertBefore(newItem , storedItem);//this works at index if i select 2 it will be inserted at third one
    list.insertBefore(newItem , storedItem);
    input3.value="";
    input4.value="";
}



function editByIndex(){
    const input5 = document.getElementById("input5");
    const input6 = document.getElementById("input6");

    if(input5.value <1 || input3.value> list.children.length+1 ){
        error.innerHTML = "ERROR Invalid Index";
        input5.value="";
        return;
    }
    if(input6.value==""){
        error.innerHTML = "Error: Invalid Value";
        input5.value="";
        input6.value="";
        return
    }

    for(let i = 0; i < items.length; i++){
        if(items[i].innerHTML.toLowerCase() == input6.value.toLowerCase().trim()){
            document.getElementById("error").innerHTML = "already exist";
            input5.value="";
            input6.value="";
            return;
        }
    }

    list.children[input5.value-1].innerHTML = input6.value;//NOTE: ON INDEX EDIT NO LOOP NEEDED
        input5.value="";
        input6.value="";
}



function deleteContent(){
    const input7 = document.getElementById("input7");

    let isExist = false;
    [...items].forEach((item)=>{
        if(item.innerHTML.toLowerCase() == input7.value.toLowerCase().trim()){
            list.removeChild(item);
            isExist = true;
            error.innerHTML= "";
        }
    })
    input7.value="";
    if(!isExist){
        error.innerHTML= "The Desired Value to delete is not found";
    }
    
}