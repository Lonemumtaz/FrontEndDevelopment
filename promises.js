let promises = new Promise((resolve, reject) => {
    console.log("promise started");
    reject("promise rejected");});

    function getData(dataId ){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
               // console.log("data", dataId);
                //esolve("success");
                reject("error");
            }, 5000);
        });
    }
   // use of promises
    const getPromise =()=> {
        return new Promise((resolve, reject) => {
        console.log("promise started");
                resolve("success");
        });
    };
    let promise = getPromise();
    promise.then((res) => {
        console.log("promise fulfiled" ,res);
    });
    promise.catch((err) => {
        console.log("rejected",merr);
    });