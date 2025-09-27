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

const getData = async()=>{
    const res = await getOrder()
    console.log("food order...",res)
    const res2 = await getPayment(res)
    console.log("payment...",res2)



    console.log("Ending processs....");
    
}

getData()