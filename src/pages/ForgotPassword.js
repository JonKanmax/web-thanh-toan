import React from "react";

function ForgotPassword() {
  return (
    <div>
      <h1> Quên mật khẩu </h1>{" "}
      <form>
        <input type="email" placeholder="Nhập email" />
        <button type="submit"> Gửi yêu cầu </button>{" "}
      </form>{" "}
    </div>
  );
}

export default ForgotPassword;
