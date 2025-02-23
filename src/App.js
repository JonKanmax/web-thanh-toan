import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import "./styles/index.css";

export default function App() {
    return ( <
        Router >
        <
        div className = "app-container" >
        <
        nav className = "navbar" >
        <
        div className = "logo" > 燕云十六声 < /div> <
        div className = "nav-links" >
        <
        Link to = "/" > 首页 < /Link> <
        Link to = "/news" > 新闻 < /Link> <
        Link to = "/download" > 下载 < /Link> <
        Link to = "/community" > 社区 < /Link> <
        Link to = "/support" > 客服 < /Link> <
        /div> <
        /nav> <
        Routes >
        <
        Route path = "/"
        element = { < Home / > }
        /> <
        /Routes> <
        /div> <
        /Router>
    );
}