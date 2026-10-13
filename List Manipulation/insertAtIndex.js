const list = document.getElementById("list");

function insertAtIndex(){
    const NewContent = document.getElementById("input1");
    const index = document.getElementById("input3");

    const newElement = document.createElement("li");
        if( index.value >=0 && index.value < list.children.length+1){
            newElement.innerHTML = NewContent.value;

        const referenceElement = list.children[index.value];// This a variable that stores the li its like nodes in data Structure
        
        list.insertBefore(newElement , referenceElement);
        //OR list.insertBefore(newElement , list.children[index]);

        NewContent.value = "";
        index.value = "";
    }
}