let box = document.getElementById("box");
const createData = ()=>{
    let h1 = document.createElement("h1");
    h1.innerHTML = "Hello World";


    let link = document.createElement("a");
    link.innerHTML = "Google"
    link.href = "https://www.google.com/";



    box.appendChild(h1)
    box.appendChild(link)
}