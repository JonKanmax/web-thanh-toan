import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (email === "admin@example.com" && password === "password") {
            alert("Đăng nhập thành công!");
            navigate("/dashboard");
        } else {
            alert("Sai thông tin đăng nhập!");
        }
    };

    return ( <
        div className = "form-container" >
        <
        h2 > Login < /h2> <
        form onSubmit = { handleLogin } >
        <
        input type = "email"
        placeholder = "Email"
        value = { email }
        onChange = {
            (e) => setEmail(e.target.value) }
        required /
        >
        <
        input type = "password"
        placeholder = "Password"
        value = { password }
        onChange = {
            (e) => setPassword(e.target.value) }
        required /
        >
        <
        button type = "submit" > Login < /button> <
        /form> <
        /div>
    );
}

export default Login;