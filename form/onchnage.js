let mydiv = document.getElementById("mydiv")

const chnageColor = ()=>{
    let colors = document.getElementById("colors")
    console.log(colors.value);

    mydiv.style.height = "200px";
    mydiv.style.width = "200px";
    mydiv.style.backgroundColor = colors.value;
    mydiv.style.margin = "100px 400px"
    
}


const changeRedius = ()=>{
    let radius = document.getElementById("radius")

    mydiv.style.borderRadius = radius.value
}