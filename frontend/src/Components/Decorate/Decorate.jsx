import { useState } from "react";
import decorate_banner from "../../assets/decorate_banner.png";
import decorateData from "../../data/decorate";
import ItemLens from "../Items/ItemLens";
const Decorate = () => {
  // Control State optionDecorate
  const [optionDecorate, setOptionDecorate] = useState({
    buttons: false,
    beads: false,
    flowerMaking: false,
    bagMaking: false,
    keychain: false,
    stuffedAnimals: false,
  });
  const handleChooseDecorate = (option) => {
    setOptionDecorate((prevOptions) => ({
      ...prevOptions,
      [option]: !prevOptions[option],
    }));
  };

  // Control option Price
  const [optionPrice, setOptionPrice] = useState({
    range5to100: false,
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
      <img className="w-full h-[300px]" src={decorate_banner} alt="" />
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
            <p className="font-bold">Phụ Liệu Trang Trí</p>
            <div
              className="flex items-center gap-[10px] cursor-pointer"
              onClick={() => handleChooseDecorate("buttons")}
            >
              <div className="w-[16px] h-[16px] border-[1px] border-gray-300 rounded-full mt-[2px] flex items-center justify-center">
                {optionDecorate.buttons && (
                  <div className="w-[8px] h-[8px] bg-[#f1a3a4] rounded-full"></div>
                )}
              </div>
              <p
                className={`text-sm ${optionDecorate.buttons ? "text-[#f1a3a4] font-medium" : ""}`}
              >
                Nút
              </p>
            </div>
            <div
              className="flex items-center gap-[10px] cursor-pointer"
              onClick={() => handleChooseDecorate("beads")}
            >
              <div className="w-[16px] h-[16px] border-[1px] border-gray-300 rounded-full mt-[2px] flex items-center justify-center">
                {optionDecorate.beads && (
                  <div className="w-[8px] h-[8px] bg-[#f1a3a4] rounded-full"></div>
                )}
              </div>
              <p className={`text-sm ${optionDecorate.beads ? "text-[#f1a3a4] font-medium" : ""}`}>
                Hạt
              </p>
            </div>
            <div
              className="flex items-center gap-[10px] cursor-pointer"
              onClick={() => handleChooseDecorate("flowerMaking")}
            >
              <div className="w-[16px] h-[16px] border-[1px] border-gray-300 rounded-full mt-[2px] flex items-center justify-center">
                {optionDecorate.flowerMaking && (
                  <div className="w-[8px] h-[8px] bg-[#f1a3a4] rounded-full"></div>
                )}
              </div>
              <p
                className={`text-sm ${
                  optionDecorate.flowerMaking ? "text-[#f1a3a4] font-medium" : ""
                }`}
              >
                Phụ liệu làm hoa
              </p>
            </div>
            <div
              className="flex items-center gap-[10px] cursor-pointer"
              onClick={() => handleChooseDecorate("bagMaking")}
            >
              <div className="w-[16px] h-[16px] border-[1px] border-gray-300 rounded-full mt-[2px] flex items-center justify-center">
                {optionDecorate.bagMaking && (
                  <div className="w-[8px] h-[8px] bg-[#f1a3a4] rounded-full"></div>
                )}
              </div>
              <p
                className={`text-sm ${
                  optionDecorate.bagMaking ? "text-[#f1a3a4] font-medium" : ""
                }`}
              >
                Phụ liệu làm túi xách
              </p>
            </div>
            <div
              className="flex items-center gap-[10px] cursor-pointer"
              onClick={() => handleChooseDecorate("keychain")}
            >
              <div className="w-[16px] h-[16px] border-[1px] border-gray-300 rounded-full mt-[2px] flex items-center justify-center">
                {optionDecorate.keychain && (
                  <div className="w-[8px] h-[8px] bg-[#f1a3a4] rounded-full"></div>
                )}
              </div>
              <p
                className={`text-sm ${optionDecorate.keychain ? "text-[#f1a3a4] font-medium" : ""}`}
              >
                Móc khóa
              </p>
            </div>
            <div
              className="flex items-center gap-[10px] cursor-pointer"
              onClick={() => handleChooseDecorate("stuffedAnimals")}
            >
              <div className="w-[16px] h-[16px] border-[1px] border-gray-300 rounded-full mt-[2px] flex items-center justify-center">
                {optionDecorate.stuffedAnimals && (
                  <div className="w-[8px] h-[8px] bg-[#f1a3a4] rounded-full"></div>
                )}
              </div>
              <p
                className={`text-sm ${
                  optionDecorate.stuffedAnimals ? "text-[#f1a3a4] font-medium" : ""
                }`}
              >
                Làm thú bông
              </p>
            </div>
          </div>
          <div className="price w-full flex flex-col gap-[10px]">
            <p className="font-bold">Giá</p>
            <div
              className="flex items-center gap-[10px] cursor-pointer"
              onClick={() => handleChoosePrice("range5to100")}
            >
              <div className="w-[16px] h-[16px] border-[1px] border-gray-300 rounded-full mt-[2px] flex items-center justify-center">
                {optionPrice.range5to100 && (
                  <div className="w-[8px] h-[8px] bg-[#f1a3a4] rounded-full"></div>
                )}
              </div>
              <p
                className={`text-sm ${optionPrice.range5to100 ? "text-[#f1a3a4] font-medium" : ""}`}
              >
                5000vnđ - 100000vnđ
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
          {decorateData.map((item) => (
            <ItemLens key={item.id} data={item} path={"decorate"} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Decorate;
