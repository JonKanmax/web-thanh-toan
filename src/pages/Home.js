import React from "react";
import "./Home.css"; // Import file CSS phải đặt trên cùng

console.log("✅ Home component is rendering..."); // Kiểm tra Home.js có chạy không

export default function Home() {
    return ( <
        div className = "home" >
        <
        header className = "banner" >
        <
        img src = "https://www.yysls.cn/static/images/banner.jpg"
        alt = "燕云十六声 Banner" /
        >
        <
        /header> <
        section className = "content" >
        <
        h1 > 欢迎来到燕云十六声 < /h1> <
        p > 沉浸式开放世界武侠体验， 即将到来！ < /p> <
        button className = "btn-download" > 立即下载 < /button> <
        /section> <
        /div>
    );
}