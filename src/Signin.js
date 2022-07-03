import React from "react";
import { useState } from "react";
import Requests from "./utils/Requests/Auth/login"

// import { toast, Slide } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// toast.configure({
//   autoClose: 2000,
//   transition: Slide,
//   position: "top-right",
//   hideProgressBar: false,
//   closeOnClick: true,
//   pauseOnHover: true,
//   draggable: true,
//   progress: undefined,
// });

const SignUp1 = () => {
    const [account, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [header] = useState({
      // headers: {
      //   "Content-Type": "application/json",
      //   Accept: "application/x-www-form-urlencoded",
      //   "Access-Control-Allow-Origin": "*",
      // },
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
  
    const handleSubmit = async () => {
      try {
        // var data = {
        //   account: account,
        //   password: password,
        //   ip: 'fe80::c10f:c9d7:38ed:2b89%7',
        //   mac: '29',
        //   token: '123456789',
        // };
        let formdata = new FormData();
  
        formdata.append("account", account);
        formdata.append("password", password);
        formdata.append("ip", "fe80::c10f:c9d7:38ed:2b89%7");
        formdata.append("mac", "29");
        formdata.append("token", "123456789");
  
        const response = await Requests.Login(formdata, header);
        console.log(response.data);
        if (response.status === 200) {
          var newObj = response.data.reduce((a, b) => Object.assign(a, b), {});
          window.localStorage.setItem("Enroll", newObj.Enroll);
          window.localStorage.setItem("sectionId", newObj.SectionId);
          window.localStorage.setItem("token", newObj.token);
        } else {
          console.log(response.data);
        }
      } catch (error) {
        if (error) {
          console.log(error.response);
        }
      }
    };

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Email </label>
                    <input type="text" name="uname" required onChange={(e) => setEmail(e.target.value)}/>
                    
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input type="password" name="pass" required onChange={(e) => setPassword(e.target.value)}  />
                    
                </div>
                <div className="button-container">
                    <input type="submit" /> 
                </div>
            </form>
        </div>
    );
};

export default SignUp1;
