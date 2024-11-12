import "./App.css"

function Marks({m,m2,m3}) {
  return (
    <div id="disp">
        <h1>Marksheet</h1>
        <h2>Semester 1 : {m}</h2>
        <h2>Semester 2 : {m2}</h2>
        <h2>Semester 3 : {m3}</h2>
    </div>
  )
}

export default Marks