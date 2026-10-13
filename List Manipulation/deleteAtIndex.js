const list = document.getElementById("list");

function deleteAtIndex(){
    const index = document.getElementById("input2");
    if( index.value >=0 && index.value < list.children.length){
        list.removeChild(list.children[index.value]);// children array of html collection
        index.value="";
    }
}