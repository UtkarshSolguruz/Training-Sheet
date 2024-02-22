const myPromise = new Promise((resolve,reject)=>{
    if(false){
        resolve('success')
    }
    else{
        reject('failure')
    }
})

myPromise.then((msg)=>{
    console.log("This is in the 'Then'")
}).catch((msg)=>{
    console.log("This is in the 'catch'")
})




const multiplePromise1 = new Promise((res,rej)=>{
    res('1st promise resolved');
})

const multiplePromise2 = new Promise((res,rej)=>{
    res('2nd promise resolved');
})

Promise.all(
    [multiplePromise1,multiplePromise2]
).then((msg)=>{
    console.log(msg)
})