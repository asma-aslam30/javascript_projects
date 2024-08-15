const  inputBox = document.getElementById("input-box");
const  listcontainer = document.getElementById("list-container");

function AddTask(){
    if(inputBox.value === ''){
        alert("You must write Something!")
    }
    else{
        let li=document.getElementById("li")
        li.innerHTML=inputBox.value;
        listcontainer.appendChild(li)
        // let span =document.createElement("span");
        // span.innerHTML="\u00d7";
    }
    inputBox.value=""
}