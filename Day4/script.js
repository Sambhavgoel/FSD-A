// var x=13
// let y=23
// // let y=34
// function display(){
//     // alert('hello')
//     var x=24
//     let y=4
//     console.log("hello",x,y)
// }
// display()



// ................




function validate() {
  let username = document.getElementById("un").value;
  let pass = document.getElementById("pass").value;
  let p1 = document.getElementById("result");
  if (username == "admin") {
    if (pass == "admin") {
      p1.innerText = "Validated";
    } else {
      p1.innerText = "Invalid Password";
    }
  } else {
    p1.innerText = "Invalid Username";
  }

}

