// function api() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data received");
//     }, 2000);
//   });
// }
// async function getWheatherData() {
//   await api();
//   await api();
// }
function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("success");
    }, 2000);
  });
}
//async await
async function getDataAsync() {
    console.log("getting data1....");
   await getData(1);
   console.log("getting data2....");
  await getData(2);
  console.log("getting data3....");
  await getData(3);
  console.log("getting data1....");
  await getData(4);

}