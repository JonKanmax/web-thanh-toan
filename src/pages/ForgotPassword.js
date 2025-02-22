import React, { useState } from "react";

const ForgotPassword = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState("email");

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        {" "}
        {/* Nút đóng */}{" "}
        <button className="close-btn" onClick={onClose}>
          {" "}
          ✖{" "}
        </button>{" "}
        <h2 className="text-2xl font-bold text-center mb-4"> 忘记密码 </h2>
        {/* Bọc nội dung trong modal-content để có thể cuộn */}{" "}
        <div className="modal-content">
          {" "}
          {/* Tabs chọn phương thức xác thực */}{" "}
          <div className="tab-container">
            <button
              className={activeTab === "email" ? "tab-active" : "tab"}
              onClick={() => setActiveTab("email")}
            >
              邮箱找回{" "}
            </button>{" "}
            <button
              className={activeTab === "google" ? "tab-active" : "tab"}
              onClick={() => setActiveTab("google")}
            >
              Google验证找回{" "}
            </button>{" "}
            <button
              className={activeTab === "question" ? "tab-active" : "tab"}
              onClick={() => setActiveTab("question")}
            >
              答案找回{" "}
            </button>{" "}
          </div>
          {/* Nội dung form theo tab được chọn */}{" "}
          <form className="space-y-4">
            {" "}
            {activeTab === "email" && (
              <>
                <label> 邮箱: </label>{" "}
                <input type="email" placeholder="请输入邮箱" />
                <label> 验证码: </label>{" "}
                <div className="captcha-container">
                  <input type="text" placeholder="请输入验证码" />
                  <button className="btn-green"> 获取验证码 </button>{" "}
                </div>{" "}
                <label> 新密码: </label>{" "}
                <input type="password" placeholder="请输入新密码" />
                <label> 确认新密码: </label>{" "}
                <input type="password" placeholder="请再次输入新密码" />
              </>
            )}
            {activeTab === "google" && (
              <>
                <label> 账号: </label>{" "}
                <input type="text" placeholder="请输入账号" />
                <label> 游戏分类: </label>{" "}
                <select>
                  <option> 请选择游戏分类 </option> <option> 传奇 </option>{" "}
                  <option> 仙侠 </option>{" "}
                </select>{" "}
                <button className="btn-green"> 获取二维码 </button>{" "}
                <div className="qr-placeholder"> </div> <label> 新密码: </label>{" "}
                <input type="password" placeholder="请输入新密码" />
                <label> 确认新密码: </label>{" "}
                <input type="password" placeholder="请再次输入新密码" />
                <label> 验证码: </label>{" "}
                <input type="text" placeholder="请输入验证码" />
              </>
            )}
            {activeTab === "question" && (
              <>
                <label> 账号: </label>{" "}
                <input type="text" placeholder="请输入账号" />
                <label> 游戏分类: </label>{" "}
                <select>
                  <option> 请选择游戏分类 </option> <option> 传奇 </option>{" "}
                  <option> 仙侠 </option>{" "}
                </select>{" "}
                <label> 新密码: </label>{" "}
                <input type="password" placeholder="请输入新密码" />
                <label> 确认新密码: </label>{" "}
                <input type="password" placeholder="请再次输入新密码" />
                <label> 安全问题1: </label>{" "}
                <input type="text" placeholder="请输入答案1" />
                <label> 安全问题2: </label>{" "}
                <input type="text" placeholder="请输入答案2" />
              </>
            )}{" "}
          </form>{" "}
        </div>
        {/* Nút hành động */} <button className="btn-green"> 确定 </button>{" "}
        <button className="btn-outline" onClick={onClose}>
          {" "}
          取消{" "}
        </button>{" "}
      </div>{" "}
    </div>
  );
};

export default ForgotPassword;
