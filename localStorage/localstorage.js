const submitHandler = ()=>{
    let name = document.getElementById("name")
    let email = document.getElementById("email")
    let password = document.getElementById("password")


    console.log(name.value + " " + email.value + " " + password.value);


    localStorage.setItem("name",name.value);

    localStorage.setItem("email",email.value);
    localStorage.setItem("password",password.value);


    location.href= "./login.html"
    
}

let result = document.getElementById("result")

const getDate = ()=>{

    let name = localStorage.getItem("name");
    let email = localStorage.getItem("email");
    let password = localStorage.getItem("password");

    result.innerHTML = name + " " + email + " " + password;
}

const removeData = ()=>{

    // localStorage.clear()
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    localStorage.removeItem("name");


}