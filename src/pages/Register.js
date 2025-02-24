import React from "react";

function Register() {
  return (
    <div>
      <h1> Đăng ký </h1>{" "}
      <form>
        <input type="text" placeholder="Tên đăng nhập" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Mật khẩu" />
        <button type="submit"> Đăng ký </button>{" "}
      </form>{" "}
    </div>
  );
}

export default Register;
