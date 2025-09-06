function getData(){
    

    let promise = new Promise((resolve,reject)=>{

        setTimeout(()=>{
            // resolve("This is the code..");
            reject("Failed to execute code..")
        },4000)
    })

    
    // console.log(promise);
    promise.then((data)=>{
        console.log(data);
    })
    promise.catch((Err)=>{
        console.log(Err);
    })
    


}

getData()