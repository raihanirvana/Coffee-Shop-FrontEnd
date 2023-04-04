import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import cofe from "../../assets/cofe.webp";

function HeaderNotLogin() {
  const [active, setActive] = useState("");
  const navigate = useNavigate();

  const HandleElement = (element) => {
    setActive(element);
  };

  return (
    <nav className="border-b border-solid border-[#9f9f9f] bg-white flex w-auto h-[129px] items-center">
      <div className="h-full flex">
        <img
          className="lg:ml-[150px] mt-[52px] lg:w-[10%] h-[33px] w-[33px] ml-[30px]"
          src={cofe}
          alt="Coffe"
        />
        <h3 className="mt-[56.12px] ml-[15px]">Coffee Shop</h3>
      </div>
      <ul className="lg:flex hidden list-none gap-10 text-[#4f5665] font-medium ml-[237px]">
        <li
          className={`text-[#4f5665] text-base hover:text-[#6a4029] hover:text-xl cursor-pointer ${
            active === "/" ? "text-red-600" : ""
          }`}
          onClick={() => {
            HandleElement("/");
            navigate("/");
          }}
        >
          Home
        </li>
        <li
          className={`text-[#4f5665] text-base hover:text-[#6a4029] hover:text-xl cursor-pointer ${
            active === "product" ? "text-red-600" : ""
          }`}
          onClick={() => {
            HandleElement("product");
            navigate("/product");
          }}
        >
          Product
        </li>
        <li
          className={`text-[#4f5665] text-base hover:text-[#6a4029] hover:text-xl cursor-pointer ${
            active === "productdetail" ? "text-red-600" : ""
          }`}
          onClick={() => {
            HandleElement("productdetail");
            navigate("/payment");
          }}
        >
          Your Cart
        </li>
        <li
          className={`text-[#4f5665] text-base hover:text-[#6a4029] hover:text-xl cursor-pointer ${
            active === "history" ? "text-red-600" : ""
          }`}
          onClick={() => {
            HandleElement("history");
            navigate("/history");
          }}
        >
          History
        </li>
      </ul>
      <ul className="flex list-none ml-[200px] gap-10 items-center">
        <li>
          <i data-feather="menu" className="hidden"></i>
        </li>
        <li
          className="font-bold leading-[18.96px] text-[#0b132a] cursor-pointer"
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </li>
        <li>
          <button
            onClick={() => {
              navigate("/signup");
            }}
            className="bg-[#ffba33] border-[#ffba33] rounded-[50px] border w-[150px] h-[45px] text-base leading-[19px] font-medium"
          >
            Sign Up
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNotLogin;
