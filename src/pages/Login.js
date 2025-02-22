import React, { useState } from "react";
import ForgotPassword from "./ForgotPassword";
import Register from "./Register";

const Login = () => {
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div
      className="relative bg-cover bg-center"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      <div className="overlay"> </div>
      {/* Form đăng nhập */}{" "}
      <div className="login-container relative z-10">
        <h2 className="text-2xl font-bold text-center mb-6"> 会员中心 </h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700"> 用户名: </label>{" "}
            <input type="text" placeholder="admin / user" />
          </div>
          <div>
            <label className="block text-gray-700"> 密码: </label>{" "}
            <input type="password" placeholder="123456" />
          </div>
          <div>
            <label className="block text-gray-700"> 验证码: </label>{" "}
            <div className="captcha-container">
              <input type="text" placeholder="请输入验证码" />
              <img src="/captcha.jpg" alt="captcha" className="captcha-img" />
            </div>{" "}
          </div>
          <button className="btn-green"> 登录 </button>
          {/* Nhóm nút đăng ký & quên mật khẩu */}{" "}
          <div className="btn-group">
            <button
              className="btn-outline"
              onClick={(e) => {
                e.preventDefault();
                setShowRegister(true);
              }}
            >
              立即注册{" "}
            </button>{" "}
            <button
              className="btn-outline"
              onClick={(e) => {
                e.preventDefault();
                setShowForgotPassword(true);
              }}
            >
              忘记密码{" "}
            </button>{" "}
          </div>{" "}
        </form>{" "}
      </div>
      {/* Modal Quên Mật Khẩu */}{" "}
      {showForgotPassword && (
        <ForgotPassword onClose={() => setShowForgotPassword(false)} />
      )}
      {/* Modal Đăng Ký */}{" "}
      {showRegister && <Register onClose={() => setShowRegister(false)} />}{" "}
    </div>
  );
};

export default Login;
