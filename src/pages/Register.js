import React from "react";

const Register = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        {" "}
        {/* Nút đóng "X" */}{" "}
        <button className="close-btn" onClick={onClose}>
          {" "}
          ✖{" "}
        </button>
        {/* Tiêu đề */}{" "}
        <h2 className="text-2xl font-bold text-center mb-4"> 注册 </h2>
        {/* Form đăng ký */}{" "}
        <form className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="请输入账户"
              className="modal-input"
            />
          </div>{" "}
          <div>
            <input
              type="password"
              placeholder="请设置密码"
              className="modal-input"
            />
          </div>{" "}
          <div>
            <input
              type="password"
              placeholder="确认密码设置"
              className="modal-input"
            />
          </div>{" "}
          <div>
            <input
              type="email"
              placeholder="请输入您的电子邮箱"
              className="modal-input"
            />
          </div>
          {/* Nút "下一步" */} <button className="btn-next"> 下一步 </button>{" "}
        </form>{" "}
      </div>{" "}
    </div>
  );
};

export default Register;
