
// const list = document.querySelector("#list"); // first way to catch ul from html
const list = document.getElementById("list"); // global variable

function read(){
    const items = list.getElementsByTagName("li");//access only the elements inside the ul that have id list
    // const items = document.getElementsByTagName("li"); // this access all the li's from all ul's in the website
    // console.log(items);

    // items now is html collection "like array but not array" we need we can't say items.forEach... we can:


    // Array.from(items).forEach

    // or
    //[...items] => this generate it to array like above
    [...items].forEach(function(item){
        // console.log(item)
        console.log(item.innerHTML);
    });

}
