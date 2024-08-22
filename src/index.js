import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "bootstrap/dist/css/bootstrap.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div className="container d-flex align-items-center text-center">
        <div className="form-signin">
            <form>
                <img className="mb-4"
                     src="https://scontent.fsgn2-11.fna.fbcdn.net/v/t39.30808-6/425567330_768752905156957_2336636500508483584_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeElb32f6q5Am0qM38I0CU3UPEpxof5rHGA8SnGh_mscYDnN3r3R-0P9SGiadmzNzjPcf5ECfTYsG-A2U7Plcz1U&_nc_ohc=VZnKYGVgoLMQ7kNvgE2CO2_&_nc_ht=scontent.fsgn2-11.fna&oh=00_AYDnRnpyQr4QyxFW6Pzq4FZ9eUPqYPWwB_6UAjsKChoVyQ&oe=66CCAFCC"
                     alt="" width="72" height="57"/>
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                <div className="form-floating">
                    <input type="email" className="form-control email" id="floatingInput"
                           placeholder="name@example.com"/>
                    <label>Email address</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control password" id="floatingPassword"
                           placeholder="Password"/>
                    <label>Password</label>
                </div>
                <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox"/> Remember me
                    </label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
            </form>
        </div>
    </div>
);

