async function sleep(millis) {
    await new Promise(resolve => {
        setTimeout(()=> {
            resolve("horse")
        }, millis)
    })
}

 
 let t = Date.now()
 sleep(100).then(() => console.log(Date.now() - t)) // 100
