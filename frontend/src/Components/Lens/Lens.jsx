import { useState } from "react";
import lens_banner from "../../assets/lens_banner.png";
import lensData from "../../data/lensoi";
import ItemLens from "../Items/ItemLens";
const Lens = () => {
  // Control State optionMaterial
  const [optionMaterial, setOptionMaterial] = useState({
    Cotton: false,
    Acrylic: false,
    Wool: false,
    Polyester: false,
    Bamboo: false,
    Silk: false,
    Cashmere: false,
  });
  const handleChooseMaterial = (option) => {
    setOptionMaterial((prevOptions) => ({
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
      <img className="w-full h-[300px] object-fill" src={lens_banner} alt="" />
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
            <p className="font-bold">Chất Liệu Len</p>
            <div
              className="flex items-center gap-[10px] cursor-pointer"
              onClick={() => handleChooseMaterial("Cotton")}
            >
              <div className="w-[16px] h-[16px] border-[1px] border-gray-300 rounded-full mt-[2px] flex items-center justify-center">
                {optionMaterial.Cotton && (
                  <div className="w-[8px] h-[8px] bg-[#f1a3a4] rounded-full"></div>
                )}
              </div>
              <p className={`text-sm ${optionMaterial.Cotton ? "text-[#f1a3a4] font-medium" : ""}`}>
                Cotton
              </p>
            </div>
            <div
              className="flex items-center gap-[10px] cursor-pointer"
              onClick={() => handleChooseMaterial("Acrylic")}
            >
              <div className="w-[16px] h-[16px] border-[1px] border-gray-300 rounded-full mt-[2px] flex items-center justify-center">
                {optionMaterial.Acrylic && (
                  <div className="w-[8px] h-[8px] bg-[#f1a3a4] rounded-full"></div>
                )}
              </div>
              <p
                className={`text-sm ${optionMaterial.Acrylic ? "text-[#f1a3a4] font-medium" : ""}`}
              >
                Acrylic
              </p>
            </div>
            <div
              className="flex items-center gap-[10px] cursor-pointer"
              onClick={() => handleChooseMaterial("Wool")}
            >
              <div className="w-[16px] h-[16px] border-[1px] border-gray-300 rounded-full mt-[2px] flex items-center justify-center">
                {optionMaterial.Wool && (
                  <div className="w-[8px] h-[8px] bg-[#f1a3a4] rounded-full"></div>
                )}
              </div>
              <p className={`text-sm ${optionMaterial.Wool ? "text-[#f1a3a4] font-medium" : ""}`}>
                Wool
              </p>
            </div>
            <div
              className="flex items-center gap-[10px] cursor-pointer"
              onClick={() => handleChooseMaterial("Polyester")}
            >
              <div className="w-[16px] h-[16px] border-[1px] border-gray-300 rounded-full mt-[2px] flex items-center justify-center">
                {optionMaterial.Polyester && (
                  <div className="w-[8px] h-[8px] bg-[#f1a3a4] rounded-full"></div>
                )}
              </div>
              <p
                className={`text-sm ${
                  optionMaterial.Polyester ? "text-[#f1a3a4] font-medium" : ""
                }`}
              >
                Polyester
              </p>
            </div>
            <div
              className="flex items-center gap-[10px] cursor-pointer"
              onClick={() => handleChooseMaterial("Bamboo")}
            >
              <div className="w-[16px] h-[16px] border-[1px] border-gray-300 rounded-full mt-[2px] flex items-center justify-center">
                {optionMaterial.Bamboo && (
                  <div className="w-[8px] h-[8px] bg-[#f1a3a4] rounded-full"></div>
                )}
              </div>
              <p className={`text-sm ${optionMaterial.Bamboo ? "text-[#f1a3a4] font-medium" : ""}`}>
                Bamboo
              </p>
            </div>
            <div
              className="flex items-center gap-[10px] cursor-pointer"
              onClick={() => handleChooseMaterial("Silk")}
            >
              <div className="w-[16px] h-[16px] border-[1px] border-gray-300 rounded-full mt-[2px] flex items-center justify-center">
                {optionMaterial.Silk && (
                  <div className="w-[8px] h-[8px] bg-[#f1a3a4] rounded-full"></div>
                )}
              </div>
              <p className={`text-sm ${optionMaterial.Silk ? "text-[#f1a3a4] font-medium" : ""}`}>
                Silk
              </p>
            </div>
            <div
              className="flex items-center gap-[10px] cursor-pointer"
              onClick={() => handleChooseMaterial("Cashmere")}
            >
              <div className="w-[16px] h-[16px] border-[1px] border-gray-300 rounded-full mt-[2px] flex items-center justify-center">
                {optionMaterial.Cashmere && (
                  <div className="w-[8px] h-[8px] bg-[#f1a3a4] rounded-full"></div>
                )}
              </div>
              <p
                className={`text-sm ${optionMaterial.Cashmere ? "text-[#f1a3a4] font-medium" : ""}`}
              >
                Cashmere
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
          {lensData.map((item) => (
            <ItemLens key={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lens;
