// const getData = ()=>{
//     var promise = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve({
//                 message:"Data fetched successfully..",
//                 status:200
//             })
//         },3000)
//     })

//     promise.then((data)=>{
//         console.log(data)
//     })
//     promise.catch((err)=>{
//         console.log(err)
//     })
// }

// getData()



// const getData = ()=>{
//     var promise = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve({
//                 message:"Data fetched successfully..",
//                 status:200
//             })
//         },3000)
//     })

//     return promise
// }

// let ans = getData()
// ans.then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// })


const getData = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({
                message:"Data fetched successfully..",
                status:200
            })
        },3000)
    })
}

let ans = getData()
ans.then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err)
})