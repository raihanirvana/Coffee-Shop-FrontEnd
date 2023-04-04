import React from "react";
import cofe from "../../assets/cofe.webp";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <nav className="flex justify-between items-center px-[70px] h-[157px] bg-white border-b border-solid border-[#9f9f9f]">
      <div className="flex ml-20">
        <img className="w-1/5 h-8 mr-5" src={cofe} alt="" />
        <h3 className="w-[120%] mt-1 text-xl">Coffee Shop</h3>
      </div>
      <ul className="hidden lg:flex gap-10">
        <li
          className="text-[#4f5665] text-base hover:text-[#6a4029] hover:text-xl cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </li>
        <li
          onClick={() => {
            navigate("/product");
          }}
          className="text-[#4f5665] text-base hover:text-[#6a4029] hover:text-xl cursor-pointer"
        >
          Product
        </li>
        <li
          onClick={() => {
            navigate("/payment");
          }}
          className="text-[#4f5665] text-base hover:text-[#6a4029] hover:text-xl cursor-pointer"
        >
          Your Cart
        </li>
        <li
          onClick={() => {
            navigate("/history");
          }}
          className="text-[#4f5665] text-base hover:text-[#6a4029] hover:text-xl cursor-pointer"
        >
          History
        </li>
      </ul>
      <ul className="flex gap-10 mr-28">
        <li>
          <i className="hidden lg:flex" data-feather="menu"></i>
        </li>
        <li>
          <div className="w-8 h-8 bg-no-repeat bg-30 bg-[url('../assets/search.svg')]"></div>
        </li>
        <li>
          <div className="w-8 h-8 bg-no-repeat bg-30 bg-[url('../assets/chat.svg')]"></div>
        </li>
        <li>
          <div
            onClick={() => {
              navigate("/profile");
            }}
            className="rounded-full w-8 h-8 bg-no-repeat bg-30 bg-[url('../assets/profile.webp')]"
          ></div>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
