import "./ItemLens.css";
const colorClassMap = {
  White: "bg-white",
  Black: "bg-black",
  Red: "bg-red-500",
  Tomato: "bg-red-400",
  Orange: "bg-orange-400",
  Yellow: "bg-yellow-500",
  LightYellow: "bg-yellow-200",
  BoldYellow: "bg-yellow-600",
  Green: "bg-green-400",
  Blue: "bg-blue-500",
  Pink: "bg-fuchsia-300",
  Purple: "bg-purple-500",
  DeepPurple: "bg-purple-400",
  Brown: "bg-amber-800",
  Gray: "bg-slate-200",

  // Thêm các màu khác nếu cần
};
import { Link } from "react-router-dom";
const ItemLens = ({ data, path }) => {
  return (
    <div className="item relative">
      <Link to={`/${path}/${data.id}`}>
        <img className="w-full h-[229px] object-fill" alt="" src={data.colorOptions[0].image} />
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
