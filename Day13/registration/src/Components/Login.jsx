import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
  return (
    <div>
        
        <form>
                
                <div className="htmlForm-group">
                    <label className="control-label col-sm-2" htmlFor="email">Email:</label>
                    <div className="col-sm-10">
                    <input type="email" className="htmlForm-control" id="email" placeholder="Enter email"/>
                    </div>
                </div>
                <div className="htmlForm-group">
                    <label className="control-label col-sm-2" htmlFor="pwd">Password:</label>
                    <div className="col-sm-10">
                    <input type="password" className="htmlForm-control" id="pwd" placeholder="Enter password"/>
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
                    <button type="login" className="btn btn-success">Login</button>
                    </div>
                </div>
        </form>
    </div>
  )
}

export default Login