const getData = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({
                message:"data fetched successfully..",
                status:200
            })
        },4000)
    })
}


// async function answer(){
//     let ans = await getData()
//     console.log("data...",ans)

// }


const answer = async()=>{
    const ans = await getData()
    console.log("data...",ans)
}

answer()