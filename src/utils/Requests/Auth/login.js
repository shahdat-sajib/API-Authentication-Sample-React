import {  WebAuthApi } from "../../api";
import axios from "axios"; 

const Login = async (data, header) => {
    const response = await axios.post(`${WebAuthApi}/Login`, data, header)
    return response
}

const Auth = {
    Login
}

export default Auth