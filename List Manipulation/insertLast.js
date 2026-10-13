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