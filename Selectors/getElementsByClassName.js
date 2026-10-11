//there is big difference between document.getElementById and document.getElementsByClassName
//document.getElementById => catch one element because the id is unique
//document.getElementsByClassName => class name not unique , so it catches or return list of elements in meaning array even if there is one element its return inside the list ..

const t2 = document.getElementsByClassName("testClass");
    // here we cant put t2.style.display = "none"; we need for loop to access the elements inside the array
    for(let i = 0 ; i < t2.length ; i++){
        console.log(t2[i]);
        t2[i].style.display = "none";
    };
