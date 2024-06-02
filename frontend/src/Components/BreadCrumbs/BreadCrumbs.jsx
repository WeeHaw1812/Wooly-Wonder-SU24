import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineHome } from "react-icons/md";
import { Link } from "react-router-dom";

const BreadCrumbs = ({ path, data }) => {
  let convertPath = "";
  if (path === "lens") {
    convertPath = "Len Sợi";
  } else if (path === "tools") {
    convertPath = "Dụng Cụ Đan Móc Len";
  } else if (path === "decorate") {
    convertPath = "Phụ Liệu Trang Trí";
  } else if (path === "product") {
    convertPath = "Sản Phẩm";
  }
  return (
    <div className="flex items-center gap-[10px]">
      <Link to="/">
        <MdOutlineHome className="w-[20px] h-[20px] text-[#f25353] font-medium hover:opacity-75" />
      </Link>
      <IoIosArrowForward className="w-[12px] h-[12px] text-[#f25353]" />
      <Link to={`/${path}`}>
        <p className="text-sm text-[#f25353] font-medium hover:opacity-75">{convertPath}</p>
      </Link>
      <IoIosArrowForward className="w-[12px] h-[12px] text-[#f25353]" />
      <p className="text-sm text-[#f25353] font-medium">{data.category || data.material}</p>
      {data.name && (
        <div className="flex items-center justify-center gap-[10px]">
          <IoIosArrowForward className="w-[12px] h-[12px] text-[#f25353]" />
          <p className="text-sm text-[#f25353] font-medium">{data.name}</p>
        </div>
      )}
    </div>
  );
};

export default BreadCrumbs;
