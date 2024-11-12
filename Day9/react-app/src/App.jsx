import "./App.css"


function App({name,email,phone}) {
  

  return (
    <>
      <div id="disp" >
        <h1>Student Details</h1>
        <h2>Name : {name}</h2>
        <h2>Email : {email}</h2>
        <h2>Mobile : {phone}</h2>
      </div>

    </>
  )
}

export default App
