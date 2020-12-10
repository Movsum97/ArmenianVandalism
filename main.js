let click = document.getElementById("click");
let main= document.getElementsByClassName("main-body");
let box = document.createElement("div")
box.classList.add("box")



function test(){
   main.appendchild("box")
}

click.addEventListener("click" , test)