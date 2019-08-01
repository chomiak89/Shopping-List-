let itemInput = document.querySelector("#itemInput");
let addButton = document.querySelector("#addButton");
let shoppingListUl = document.querySelector("#shoppingListUl");

//EVENTS FOR CLICKING BUTTON AND HITTING ENTER 
addButton.addEventListener("click", function(){
    console.log("button clicked");

    if(checkInputLength() > 0){
        createListItem();
    }

    
})
itemInput.addEventListener("keydown", function(event){
    if(event.keyCode == 13 && checkInputLength() > 0){
        createListItem();
    }
})

//FUNCTIONS
function checkInputLength() {
    return itemInput.value.length;
}
function createListItem() {
    //create li element and add text to it
    let li = document.createElement("li");
    let text = document.createTextNode(itemInput.value);
    li.appendChild(text);

    //create i element for the delete trash can and add it to li
    let icon = document.createElement("i");
    icon.setAttribute("class", "far fa-trash-alt fa-sm icon");
    li.appendChild(icon);

    //add complete li element to the ul
    shoppingListUl.appendChild(li);

    //clear the text input field 
    itemInput.value = "";
}
//========================================================================================


//ADD THE DONE CLASS TO WHATEVER LI ELEMENT IS CLICKED 
//and
//REMOVE THE ELEMENT IF TRASH CAN IS CLICKED
shoppingListUl.addEventListener("click", function(e){
    if (e.target && e.target.nodeName == "LI"){
        e.target.classList.toggle('done');
    }
    if (e.target && e.target.nodeName == "I"){
        e.target.parentNode.remove();
    }
})