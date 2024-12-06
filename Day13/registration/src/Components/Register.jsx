import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function Register({regData}) {

    const[email,setEmail] = useState();
    const[name,setName] = useState();
    const[password,setPassword] = useState();
    const data = {name,email,password};

    const handleregister=(e)=>{
        e.preventDefault();
        alert(data.name);
        alert(data.email)
        alert(data.password)
        alert("register Successful")
        regData(data);


    }
  return (
    <div>
        
        <form>
                <div className="htmlForm-group">
                    <label className="control-label col-sm-2" htmlFor="name">Name:</label>
                    <div className="col-sm-10">
                    <input type="name" className="htmlForm-control" id="name" placeholder="Enter Name" onChange={(e)=>{setName(e.target.value)}} />
                    </div>
                </div>
                <div className="htmlForm-group">
                    <label className="control-label col-sm-2" htmlFor="email">Email:</label>
                    <div className="col-sm-10">
                    <input type="email" className="htmlForm-control" id="email" placeholder="Enter email" onChange={(e)=>{setEmail(e.target.value)}} />
                    </div>
                </div>
                <div className="htmlForm-group">
                    <label className="control-label col-sm-2" htmlFor="pwd">Password:</label>
                    <div className="col-sm-10">
                    <input type="password" className="htmlForm-control" id="pwd" placeholder="Enter password" onChange={(e)=>{setPassword(e.target.value)}} />
                    </div>
                </div>
                {/* <div className="htmlForm-group">
                    <div className="col-sm-offset-2 col-sm-10">
                    <div className="checkbox">
                        <label><input type="checkbox"> Remember me</label>
                    </div>
                    </div>
                </div> */}
                <div className="htmlForm-group">
                    <div className="col-sm-offset-2 col-sm-10">
                        <br/>
                    <button type="submit" className="btn btn-primary" onClick={handleregister} >Submit</button>
                    </div>
                </div>
        </form>
    </div>
  )
}

export default Register