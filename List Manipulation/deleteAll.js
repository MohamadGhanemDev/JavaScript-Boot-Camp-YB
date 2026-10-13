const list = document.getElementById("list");

function deleteAll(){
    // while the first child is exist , when its null the loop stop
    while(list.firstChild){ //or firstElementChild
        list.removeChild(list.firstChild);
    }
    // or
    // while(list.firstChild != null){ //or firstElementChild
    //     list.removeChild(list.firstChild);
    // }
}

// go to console 
// type list , it return from the document so we have access on it
// type list.firstChild , first child have empty text if we see the elements sometimes it shown and maybe not according to browser
// the list sometimes have empty node or empty child before the li( the "white space" in reality its a space )
// SO when we call from the list the firstChild sometimes it return this empty white space 
// if we need to insure that we need to catch the first li we need to catch firstElementChild
// firstElementChild ignore the white space

//also we have lastChild and lastElementChild

// if we need to delete every thing inside the ul directly say first child it takes the empty space and the real elements