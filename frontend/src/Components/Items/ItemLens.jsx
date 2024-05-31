import "./ItemLens.css";
import { Link } from "react-router-dom";
const ItemLens = ({ data }) => {
  console.log(data);
  return (
    <div className="item relative">
      <Link to={`/product/${data.id}`}>
        <img className="h-[229px] object-contain" alt="" src={data.colorOptions[0].image} />
        <div className="absolute flex gap-[10px] items-center top-[200px]">
          <div className="w-[15px] h-[15px] bg-red-500 rounded-full cursor-pointer"></div>
          <div className="w-[15px] h-[15px] bg-blue-500 rounded-full cursor-pointer"></div>
          <div className="w-[15px] h-[15px] bg-yellow-500 rounded-full cursor-pointer"></div>
        </div>
      </Link>
      <p>{data.name}</p>
      <div className="item-prices">
        <div className="item-price-new">{data.price}vnđ</div>
        <div className="item-price-old">200000vnd</div>
      </div>
    </div>
  );
};
export default ItemLens;
