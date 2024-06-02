import { IoCartOutline } from "react-icons/io5";
import logo from "../../assets/logo.png";
import { useState } from "react";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [selectTab, setSelectTab] = useState("Home");
  return (
    <div className="w-full px-[10px] flex items-center justify-between">
      <Link to={"/"}>
        <div className="flex flex-col items-center">
          <img className="w-[100px]" src={logo} alt="" />
          <p className="text-sm font-semibold text-[#f1a3a4]">Wooly Wonder</p>
        </div>
      </Link>
      <div className="option flex items-center gap-[20px] font-medium">
        <Link to={"/"}>
          <p
            className={`cursor-pointer ${
              selectTab === "Home" ? "font-bold text-[#f1a3a4] underline" : ""
            }`}
            onClick={() => setSelectTab("Home")}
          >
            Trang chủ
          </p>
        </Link>
        <Link to={"/lens"}>
          <p
            className={`cursor-pointer ${
              selectTab === "Lens" ? "font-bold text-[#f1a3a4] underline" : ""
            }`}
            onClick={() => setSelectTab("Lens")}
          >
            Len Sợi
          </p>
        </Link>
        <Link to={"tools"}>
          <p
            className={`cursor-pointer ${
              selectTab === "Tool" ? "font-bold text-[#f1a3a4] underline" : ""
            }`}
            onClick={() => setSelectTab("Tool")}
          >
            Dụng Cụ Đan Móc Len
          </p>
        </Link>
        <Link to={"/decorate"}>
          <p
            className={`cursor-pointer ${
              selectTab === "Cover" ? "font-bold text-[#f1a3a4] underline" : ""
            }`}
            onClick={() => setSelectTab("Cover")}
          >
            Phụ Liệu Trang Trí
          </p>
        </Link>
        <Link to={"/product"}>
          <p
            className={`cursor-pointer ${
              selectTab === "Product" ? "font-bold text-[#f1a3a4] underline" : ""
            }`}
            onClick={() => setSelectTab("Product")}
          >
            Sản Phẩm
          </p>
        </Link>
      </div>
      <div className="flex items-center justify-center gap-[10px]">
        <Link to={"/cart"}>
          <div className="w-[50px] h-[50px] relative flex items-center justify-center cursor-pointer">
            <IoCartOutline className="text-[#f1a3a4] w-[30px] h-[30px] hover:opacity-75" />
            <div className="w-[15px] h-[15px] text-xs text-white bg-red-500 rounded-full flex items-center justify-center absolute top-2 right-2">
              1
            </div>
          </div>
        </Link>
        <Link to={"/login"}>
          <div className="flex items-center gap-[5px] cursor-pointer hover:opacity-75">
            <FiLogIn className="w-[20px] h-[20px] text-[#f1a3a4]" />
            <p className="font-bold text-base text-[#f1a3a4]">Đăng Nhập</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
