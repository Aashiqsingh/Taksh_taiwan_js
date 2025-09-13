const getOrder = ()=>{
    console.log("food is going to ordered...");
    
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({
                orderId:299,
                message:"Order fetched successfully..",
                amount:1000
            })
        },4000)
    })
}


const getPayment = (data)=>{
    console.log("payment is going to done...");

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({
                paymentId:data.orderId,
                message:"Payment fetched successfully..",
                amount:data.amount
            })
        },4000)
    })
}


getOrder().then((data)=>{
    console.log("food order...",data)
    getPayment(data).then((data)=>{
        console.log("payment...",data)
    }).catch((Err)=>{
        console.log("error...",Err)
    })
}).catch((err)=>{
    console.log("error...",err)
})