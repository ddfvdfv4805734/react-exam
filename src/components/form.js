import { icons } from "antd/es/image/PreviewGroup";
import React from "react";
import "../style/form.css"


 function Form(){
    return(
        <div className="main">
            <div className="form">
                <div>
                <h1>Login</h1>
            <p>Doesn't have an acount yet? <a>Sign up</a></p>
            </div>
            <div>
            <label><h2>Email address</h2></label>
            </div>
            <div>
            <input className="inp" type="text" placeholder="you@example.com" />
            </div>
            <div>
            <label>Password</label>
            </div>
            <div>
            <input className="inp" type="text" placeholder="enter 6 character or more"/>
            </div>
            <div>
            <input type="checkbox"/><h6>Remember</h6>
            </div>
            <div>
            <button className="login">Login</button>
            </div>
            <div>or login with</div>
            <hr></hr>
            <div className="gap">
            <button className="btn">Google</button>
            <button className="btn1"> Facebook</button>
            </div>
            </div>
            <div className="img">
                <img src="https://res.cloudinary.com/cliqtick/image/upload/v1678959844/students/test_rwctqg.jpg" alt=""></img>
            </div>

        </div>
    )
 }
 export default Form;