let arr=[2,4,5,67,8,0,87]

//Map
// let newar = arr.map((x)=>x*2)
// console.log(newar)

//Filter(callback(curr value,index,arr))
// let newar = arr.filter((x)=>(x%2==0))
// console.log(newar)

//combined 

// let newar = arr.filter((x)=>(x%2==0)).map((x)=>(x=x*5))
// console.log(newar)


//reduce(callback(accumulator,curr value,index,arr),init value)
// accumulator - value from prev value
// curr value  - curr element proccessed

// let newar = arr.reduce((x,y)=>x+y,0)
// console.log(newar)

//combine
// let newar = arr.filter((x)=>(x%2==0)).map((x)=>(x=x*4)).reduce((x,y)=>x+y)
// console.log(newar)

// const student = [
//     {name : 'Alice',score:50},
//     {name : 'Bob',score:65},
//     {name : 'Charlie',score:80},
//     {name : 'David',score:45}
// ]

// let newar = student.filter((student)=>(student.score>60)).map((student)=>(student.score)*2).reduce((x,y)=>(x+y))
// console.log(newar)











