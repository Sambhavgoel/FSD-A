// callback function - pass an argument to another function and executed after that function executed its function, used to handle async opearation

// sayhello = ()=>{
//     console.log('say hello')

// }

// console.log('start')
// //inbuilt async function
// setTimeout(sayhello,2000)
// console.log('end')

// console.log('start')

// setTimeout(()=>{
//     console.log('first task completed')
//     setTimeout(()=>{
//         console.log('second task completed')
//         setTimeout(()=>{
//             console.log('Third task completed')
//         },3000)
//     },2000)
// },1000)

// console.log('end')

//promise
//pending
//fulfilled
//rejected

// const myPromise = new Promise((resolve, reject) => {
//   let success = false;

//   if (success) {
//     resolve("the problem is solved");
//   } else {
//     reject("The problem is not solved");
//   }
// });
// console.log(myPromise)
// myPromise
//   .then((message) => console.log(message))
//   .catch((error) => console.log("error is fetching the data : " + error));

//then catch - to gain the output

// function task(message,delay){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log(message);
//             resolve();
//         },delay);
//     })
// }
// task('first task complete',1000)
//     .then(()=>task('second task complete',2000))
    // .then(()=>task('third task complete',3000))


const student = [
    {name : 'Alice',score:50},
    {name : 'Bob',score:65},
    {name : 'Charlie',score:80},
    {name : 'David',score:45}
]

// function task(student)
// {
//     return new Promise((resolve,reject)=>{
//         if(student)
//         {
//             resolve();
            
//         }
//         else{
//             reject();
//         }
//     })
// }
// task(student).then(()=> console.log(message)).catch(()=> console.error())

function fetchdata()
{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            const student = [
                {name : 'Alice',score:50},
                {name : 'Bob',score:65},
                {name : 'Charlie',score:80},
                {name : 'David',score:45}
            ]
        
            resolve(student)
        },3000)
    })
}
fetchdata()
.then((student)=>{
    console.log('data received' + student.forEach((student) => {
        console.log(student.name)
    }));
}).catch((error)=>{
    console.log('error'+error)
})