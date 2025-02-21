function getData(dataId,getNextData) {
  setTimeout(() => {
    console.log("dat a", dataId);
    if(getNextData){
      getNextData();
    }
  }, 5000);
}
//callback hell
getData(1, () => {
    console.log("data received");
    getData(2, () => {
        console.log("data received");
        getData(3, () => {
            console.log("data received");
            getData (4);
            });
        });
    });
//     //promise chaining or
 getData(1).then((res) => {
    return getData(2);
}).then((res) => {
    console.log(res);
});
