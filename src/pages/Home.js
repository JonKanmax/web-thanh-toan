import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="p-6 max-w-2xl mx-auto">
    <h1 className="text-2xl font-bold text-center">
      {" "}
      Chào mừng đến với Shop Thẻ Game{" "}
    </h1>{" "}
    <p className="mt-2 text-gray-600 text-center">
      Chọn loại thẻ nạp yêu thích và thanh toán dễ dàng bằng USDT.{" "}
    </p>{" "}
    <div className="mt-6 space-y-4">
      <div className="card p-6 border rounded-lg shadow-md bg-white">
        <h2 className="text-lg font-semibold"> Thẻ Garena </h2>{" "}
        <p className="text-gray-500"> Mệnh giá từ 20 k - 500 k VND </p>{" "}
        <Link to="/login" className="mt-2 block text-blue-500">
          Mua ngay{" "}
        </Link>{" "}
      </div>{" "}
      <div className="card p-6 border rounded-lg shadow-md bg-white">
        <h2 className="text-lg font-semibold"> Thẻ Zing </h2>{" "}
        <p className="text-gray-500"> Mệnh giá từ 10 k - 200 k VND </p>{" "}
        <Link to="/login" className="mt-2 block text-blue-500">
          Mua ngay{" "}
        </Link>{" "}
      </div>{" "}
    </div>{" "}
  </div>
);

export default Home;
