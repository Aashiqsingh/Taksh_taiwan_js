const users = [
    {
        id:1,
        name:"roshan",
        age:25,
        gender:"male",
        email:"roshan@gmail.com"
    },
    {
        id:2,
        name:"priya",
        age:22,
        gender:"female",
        email:"priya@gmail.com"
    },
    {
        id:3,
        name:"bhuwan",
        age:23,
        gender:"male",
        email:"bhuwan@gmail.com"
    },
    {
        id:4,
        name:"rahul",
        age:24,
        gender:"male",
        email:"rahul@gmail.com"
    },
    {
        id:5,
        name:"amit",
        age:25,
        gender:"male",
        email:"amit@gmail.com"
    }
]

// console.log(users);


const getData = ()=>{

    let tbody = document.getElementById("tbody");


    users.map((user)=>{
        let tr = document.createElement("tr");
        let idTd = document.createElement("td");
        let nameTd = document.createElement("td");
        let ageTd = document.createElement("td");
        let genderTd = document.createElement("td");
        let emailTd = document.createElement("td");


        idTd.innerHTML = user.id;
        nameTd.innerHTML = user.name;
        ageTd.innerHTML = user.age;
        genderTd.innerHTML = user.gender;
        emailTd.innerHTML = user.email;

        tr.appendChild(idTd);
        tr.appendChild(nameTd);
        tr.appendChild(ageTd);
        tr.appendChild(genderTd);
        tr.appendChild(emailTd);
        tbody.appendChild(tr);
    })
}
