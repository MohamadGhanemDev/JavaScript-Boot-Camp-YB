const list = document.getElementById("list");

function insetLast(){
    // const inputContent = document.getElementById("input1").innerHTML; this is wrong because the innerHTML give me the text or the info BETWEEN THE OPENING TAG AND THE CLOSING TAG and in input doesn't have closing tag so we catch its value
    // const inputContent = document.getElementById("input1").value; //.value here block me when finishing to make the the value of the input empty string
    const inputContent = document.getElementById("input1");
    const newElement = document.createElement("li");// create the new li , now we have empty li
    newElement.innerHTML = inputContent.value;// adding the value text of the input to the li, in meaning make the innerHTML of the li now is the value of the input
    list.appendChild(newElement);// adding this new li to its parent "ul"
    inputContent.value = "";// make the input empty
}

function deleteAll(){
    while(list.firstChild){ //or firstElementChild
        list.removeChild(list.firstChild);
    }
}


function sortList () {
    const items = list.getElementsByTagName("li");//access all the elements inside the ul that have id list
    let newList = [];// empty array to store the new content

    [...items].forEach((item) =>{
        newList.push(item.innerHTML);// this catch inner html of each li and put it inside the newList as string so newList now is normal array not html collection
    });

    let sortedList = newList.sort();// variable that make the new array sorted

    deleteAll();// deletes the li’s inside the ul
    
    sortedList.forEach((item) =>{
        // const newElement = document.createElement("li");
        // newElement.innerHTML = item;
        // list.appendChild(newElement);


        // short hand errors:
        // first wrong way
        // const newListItem = document.createElement("li").innerHTML = item;
        // list.appendChild(newListItem);

        //second error way
        // list.appendChild(document.createElement("li").innerHTML = item);

        //why?
        //1- JavaScript creates the <li> and sets its innerHTML to item (say "Blue").
        //2- The whole expression ... .innerHTML = item evaluates to "Blue", the string.
        //3- So newListItem is "Blue", and the <li> you created is lost (nothing points to it).
        //4- list.appendChild("Blue") throws an error: appendChild only accepts nodes (elements), not strings.

        // solution:

        //first way:
        //                                  target: create the li       ,   source: object holding the string (from sortedList via forEach) under the property textContent
            list.appendChild(Object.assign(document.createElement("li") , { textContent: item }));//Object.assign copies the textContent property from a temporary { } object onto the new li, returns that filled li, and appendChild then puts it inside the ul

//const li = document.createElement("li");     // createElement
//li.textContent = item;                      // Object.assign does this
//list.appendChild(li);                       // appendChild
        
//note: Object.assign(document.createElement("li"), { textContent: item, className: "color", id: "c1" });

// note:Why textContent and not innerHTML: textContent puts the text in as plain text. If item is <b>hi</b>, it shows the tags literally instead of making bold text.

        //second way:

        //rebuilds the whole list on every loop, and it treats user text as HTML. It’s fine for practice but not a good habit.
        // list.innerHTML += `<li>${item}</li>`;


        // second way problem:

// Problems this causes:

// Slower in a loop. With 100 items, you rebuild the list 100 times.
// Old elements are replaced. Any variable that pointed to an old <li>, or any event listener added with addEventListener, is lost, because those are brand-new elements now.
// User text becomes HTML. If someone types <img src=x onerror=alert(1)>, the browser runs it. This is called XSS (cross-site scripting), a real security issue.


// When it’s OK: quick practice, or text you wrote yourself (not from an input).

// Better form of the same idea: build one string and assign once:


// list.innerHTML = sortedList.map(item => `<li>${item}</li>`).join(""); // use INSTEAD of the forEach loop but this is advanced i don't take it yet
    });
};




// BEST SECURITY PRACTICE 
// Decision rule: text from a user, use createElement + textContent. Your own fixed HTML for practice, innerHTML is fine.

// Comparison
// 	            Object.assign + appendChild	                        innerHTML +=
//Works with	    real elements	                                    text that becomes HTML
// Existing <li>s	untouched	                                        destroyed and rebuilt
// Speed in loops	fast	                                            slow (rebuilds every time)
// User input safety    safe with textContent	                        unsafe (XSS)
// Readability	        a bit dense                                     very short



// Worth adding as a note

// .sort() compares by character codes, so uppercase comes before lowercase ("Zebra" sorts before "apple"). For natural alphabetical order:
// javascript
// newList.sort((a, b) => a.localeCompare(b));