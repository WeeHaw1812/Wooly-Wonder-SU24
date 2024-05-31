import { useState } from "react";
import product_banner from "../../assets/product_banner.png";
import lenProducts from "../../data/sanpham";
import Items from "../Items/Items";
const Product = () => {
  // Control State optionProduct
  const [optionProduct, setOptionProduct] = useState({
    stuffedAnimals: false,
    flower: false,
    shirt: false,
    bag: false,
    scarf: false,
    hat: false,
  });
  const handleChooseMaterial = (option) => {
    setOptionProduct((prevOptions) => ({
      ...prevOptions,
      [option]: !prevOptions[option],
    }));
  };

  // Control option Price
  const [optionPrice, setOptionPrice] = useState({
    range10to100: false,
    range100to300: false,
    range300to500: false,
    range500up: false,
  });
  const handleChoosePrice = (option) => {
    setOptionPrice((prevOptions) => ({
      ...prevOptions,
      [option]: !prevOptions[option],
    }));
  };
  return (
    <div className="p-[20px] flex flex-col gap-[15px]">
      <img className="w-full h-[300px] object-fill" src={product_banner} alt="" />
      <div className="flex w-full">
        <div className="w-1/4 flex flex-col gap-[10px]">
          <div className="color w-full flex flex-col gap-[10px]">
            <p className="font-bold">Màu sắc</p>
            <div className="grid grid-cols-6 gap-[10px]">
              <div className="w-[30px] h-[30px] bg-black rounded-full"></div>
              <div className="w-[30px] h-[30px] bg-[#990000] rounded-full"></div>
              <div className="w-[30px] h-[30px] bg-[#ffcc00] rounded-full"></div>
              <div className="w-[30px] h-[30px] bg-[#ff6600] rounded-full"></div>
              <div className="w-[30px] h-[30px] bg-[#0057d9] rounded-full"></div>
              <div className="w-[30px] h-[30px] bg-[#f5efe1] rounded-full"></div>
              <div className="w-[30px] h-[30px] bg-[#593c1f] rounded-full"></div>
              <div className="w-[30px] h-[30px] bg-[#ee88af] rounded-full"></div>
              <div className="w-[30px] h-[30px] bg-fuchsia-300 rounded-full"></div>
              <div className="w-[30px] h-[30px] bg-[#670069] rounded-full"></div>
            </div>
          </div>
          <div className="material w-full flex flex-col gap-[10px]">
            <p className="font-bold">Thành Phẩm</p>

            <div
              className="flex items-center gap-[10px] cursor-pointer"
              onClick={() => handleChooseMaterial("flower")}
            >
              <div className="w-[16px] h-[16px] border-[1px] border-gray-300 rounded-full mt-[2px] flex items-center justify-center">
                {optionProduct.flower && (
                  <div className="w-[8px] h-[8px] bg-[#f1a3a4] rounded-full"></div>
                )}
              </div>
              <p className={`text-sm ${optionProduct.flower ? "text-[#f1a3a4] font-medium" : ""}`}>
                Hoa len trang trí
              </p>
            </div>
            <div
              className="flex items-center gap-[10px] cursor-pointer"
              onClick={() => handleChooseMaterial("shirt")}
            >
              <div className="w-[16px] h-[16px] border-[1px] border-gray-300 rounded-full mt-[2px] flex items-center justify-center">
                {optionProduct.shirt && (
                  <div className="w-[8px] h-[8px] bg-[#f1a3a4] rounded-full"></div>
                )}
              </div>
              <p className={`text-sm ${optionProduct.shirt ? "text-[#f1a3a4] font-medium" : ""}`}>
                Áo len
              </p>
            </div>
            <div
              className="flex items-center gap-[10px] cursor-pointer"
              onClick={() => handleChooseMaterial("bag")}
            >
              <div className="w-[16px] h-[16px] border-[1px] border-gray-300 rounded-full mt-[2px] flex items-center justify-center">
                {optionProduct.bag && (
                  <div className="w-[8px] h-[8px] bg-[#f1a3a4] rounded-full"></div>
                )}
              </div>
              <p className={`text-sm ${optionProduct.bag ? "text-[#f1a3a4] font-medium" : ""}`}>
                Túi xách len
              </p>
            </div>
            <div
              className="flex items-center gap-[10px] cursor-pointer"
              onClick={() => handleChooseMaterial("scaft")}
            >
              <div className="w-[16px] h-[16px] border-[1px] border-gray-300 rounded-full mt-[2px] flex items-center justify-center">
                {optionProduct.scaft && (
                  <div className="w-[8px] h-[8px] bg-[#f1a3a4] rounded-full"></div>
                )}
              </div>
              <p className={`text-sm ${optionProduct.scaft ? "text-[#f1a3a4] font-medium" : ""}`}>
                Khăn len
              </p>
            </div>
            <div
              className="flex items-center gap-[10px] cursor-pointer"
              onClick={() => handleChooseMaterial("hat")}
            >
              <div className="w-[16px] h-[16px] border-[1px] border-gray-300 rounded-full mt-[2px] flex items-center justify-center">
                {optionProduct.hat && (
                  <div className="w-[8px] h-[8px] bg-[#f1a3a4] rounded-full"></div>
                )}
              </div>
              <p className={`text-sm ${optionProduct.hat ? "text-[#f1a3a4] font-medium" : ""}`}>
                Mũ len
              </p>
            </div>
            <div
              className="flex items-center gap-[10px] cursor-pointer"
              onClick={() => handleChooseMaterial("stuffedAnimals")}
            >
              <div className="w-[16px] h-[16px] border-[1px] border-gray-300 rounded-full mt-[2px] flex items-center justify-center">
                {optionProduct.stuffedAnimals && (
                  <div className="w-[8px] h-[8px] bg-[#f1a3a4] rounded-full"></div>
                )}
              </div>
              <p
                className={`text-sm ${
                  optionProduct.stuffedAnimals ? "text-[#f1a3a4] font-medium" : ""
                }`}
              >
                Thú nhồi bông len
              </p>
            </div>
          </div>
          <div className="price w-full flex flex-col gap-[10px]">
            <p className="font-bold">Giá</p>
            <div
              className="flex items-center gap-[10px] cursor-pointer"
              onClick={() => handleChoosePrice("range10to100")}
            >
              <div className="w-[16px] h-[16px] border-[1px] border-gray-300 rounded-full mt-[2px] flex items-center justify-center">
                {optionPrice.range10to100 && (
                  <div className="w-[8px] h-[8px] bg-[#f1a3a4] rounded-full"></div>
                )}
              </div>
              <p
                className={`text-sm ${
                  optionPrice.range10to100 ? "text-[#f1a3a4] font-medium" : ""
                }`}
              >
                10000vnđ - 100000vnđ
              </p>
            </div>
            <div
              className="flex items-center gap-[10px] cursor-pointer"
              onClick={() => handleChoosePrice("range100to300")}
            >
              <div className="w-[16px] h-[16px] border-[1px] border-gray-300 rounded-full mt-[2px] flex items-center justify-center">
                {optionPrice.range100to300 && (
                  <div className="w-[8px] h-[8px] bg-[#f1a3a4] rounded-full"></div>
                )}
              </div>
              <p
                className={`text-sm ${
                  optionPrice.range100to300 ? "text-[#f1a3a4] font-medium" : ""
                }`}
              >
                100000vnđ - 300000vnđ
              </p>
            </div>
            <div
              className="flex items-center gap-[10px] cursor-pointer"
              onClick={() => handleChoosePrice("range300to500")}
            >
              <div className="w-[16px] h-[16px] border-[1px] border-gray-300 rounded-full mt-[2px] flex items-center justify-center">
                {optionPrice.range300to500 && (
                  <div className="w-[8px] h-[8px] bg-[#f1a3a4] rounded-full"></div>
                )}
              </div>
              <p
                className={`text-sm ${
                  optionPrice.range300to500 ? "text-[#f1a3a4] font-medium" : ""
                }`}
              >
                300000vnđ - 500000vnđ
              </p>
            </div>
            <div
              className="flex items-center gap-[10px] cursor-pointer"
              onClick={() => handleChoosePrice("range500up")}
            >
              <div className="w-[16px] h-[16px] border-[1px] border-gray-300 rounded-full mt-[2px] flex items-center justify-center">
                {optionPrice.range500up && (
                  <div className="w-[8px] h-[8px] bg-[#f1a3a4] rounded-full"></div>
                )}
              </div>
              <p
                className={`text-sm ${optionPrice.range500up ? "text-[#f1a3a4] font-medium" : ""}`}
              >
                Trên 500000vnđ
              </p>
            </div>
          </div>
        </div>
        <div className="w-3/4 grid grid-cols-4 gap-[20px]">
          {lenProducts.map((item) => (
            <Items key={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
