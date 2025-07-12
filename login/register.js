const regester = ()=>{
    const name = document.getElementById("name")
    const email = document.getElementById("email")
    const password = document.getElementById("password")
    const age = document.getElementById("age")

    localStorage.setItem("email",email.value);
    localStorage.setItem("password",password.value);



    location.href = "./login.html"
}

const login = ()=>{

    const email = document.getElementById("email")
    const password = document.getElementById("password")

    const localStorageEmail = localStorage.getItem("email")
    const localStoragePassword = localStorage.getItem("password")

    if(email.value === localStorageEmail && password.value === localStoragePassword){
        alert("Login Successfully...")
    }
    else{
        alert("Email or Password is wrong...")
    }
}