import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
    const navigate = useNavigate();

    const handleLogout = () => {
        alert("Bạn đã đăng xuất!");
        navigate("/login");
    };

    return ( <
        div className = "dashboard" >
        <
        h2 > Dashboard < /h2> <
        p > Chào mừng bạn đến với hệ thống! < /p> <
        button onClick = { handleLogout } > Logout < /button> <
        /div>
    );
}

export default Dashboard;