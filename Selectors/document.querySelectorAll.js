
const t7 = document.querySelectorAll(".testClass");
    for(let i = 0 ; i < t7.length ; i++){
        t7[i].style.display = "none";
    }

const t8 = document.querySelectorAll("div h3 , #testID1");
    for(let i = 0 ; i < t8.length ; i++){
        t8[i].style.display = "none";
    }

const t9 = document.querySelectorAll("#testID5");
    for(let i = 0 ; i < t9.length ; i++){
        t9[i].style.display = "none";
    }

// there is difference between these selectors getElementByClassName and getElementByTagName these both return dynamic list
// dynamic means if i add elements have same class or tag ... the element added dynamically automatically

//query selector stay as its even if we delete the elements ...


