import "./ItemLens.css";
const colorClassMap = {
  white: "bg-white",
  black: "bg-black",
  red: "bg-red-500",
  tomato: "bg-red-400",
  orange: "bg-orange-400",
  yellow: "bg-yellow-500",
  lightYellow: "bg-yellow-200",
  boldYellow: "bg-yellow-600",
  green: "bg-green-400",
  blue: "bg-blue-500",
  pink: "bg-fuchsia-300",
  purple: "bg-purple-500",
  deepPurple: "bg-purple-400",
  brown: "bg-amber-800",
  gray: "bg-slate-200",

  // Thêm các màu khác nếu cần
};
import { Link } from "react-router-dom";
const ItemLens = ({ data }) => {
  return (
    <div className="item relative">
      <Link to={`/product/${data.id}`}>
        <img className="h-[229px] object-contain" alt="" src={data.colorOptions[0].image} />
        <div className="absolute flex gap-[10px] items-center top-[200px] left-[5px]">
          {data.colorOptions.map((colorItem, index) => (
            <div
              key={index}
              className={`w-[15px] h-[15px] border-[1px] border-gray-400 ${
                colorClassMap[colorItem.color]
              } rounded-full cursor-pointer`}
            ></div>
          ))}
        </div>
      </Link>
      <p>{data.name}</p>
      <div className="item-prices">
        <div className="item-price-new">{data.price}vnđ</div>
      </div>
    </div>
  );
};
export default ItemLens;
