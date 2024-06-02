import { useState } from "react";
import toolData from "../../data/dungcu";
import toolBanner from "../../assets/tool_banner.png";
import Items from "../Items/Items";

const Tools = () => {
  // Control State optionTool
  const [optionTool, setOptionTool] = useState({
    Tatting: false,
    Dau: false,
    Cat: false,
    Dan: false,
    Moc: false,
  });
  const handleChooseTool = (option) => {
    setOptionTool((prevOptions) => ({
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
    <div className="p-[20px]">
      <div className="w-full flex items-center mb-[20px] border-y-[1px]">
        <img src={toolBanner} className="w-full h-[300px] object-fill" alt="" />
      </div>
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
          <div className="tool w-full flex flex-col gap-[10px]">
            <p className="font-bold">Dụng Cụ</p>
            <div
              className="flex items-center gap-[10px] cursor-pointer"
              onClick={() => handleChooseTool("Tatting")}
            >
              <div className="w-[16px] h-[16px] border-[1px] border-gray-300 rounded-full mt-[2px] flex items-center justify-center">
                {optionTool.Tatting && (
                  <div className="w-[8px] h-[8px] bg-[#f1a3a4] rounded-full"></div>
                )}
              </div>
              <p className={`text-sm ${optionTool.Tatting ? "text-[#f1a3a4] font-medium" : ""}`}>
                Tatting
              </p>
            </div>
            <div
              className="flex items-center gap-[10px] cursor-pointer"
              onClick={() => handleChooseTool("Dau")}
            >
              <div className="w-[16px] h-[16px] border-[1px] border-gray-300 rounded-full mt-[2px] flex items-center justify-center">
                {optionTool.Dau && (
                  <div className="w-[8px] h-[8px] bg-[#f1a3a4] rounded-full"></div>
                )}
              </div>
              <p className={`text-sm ${optionTool.Dau ? "text-[#f1a3a4] font-medium" : ""}`}>
                Kim Đánh Dấu
              </p>
            </div>
            <div
              className="flex items-center gap-[10px] cursor-pointer"
              onClick={() => handleChooseTool("Cat")}
            >
              <div className="w-[16px] h-[16px] border-[1px] border-gray-300 rounded-full mt-[2px] flex items-center justify-center">
                {optionTool.Cat && (
                  <div className="w-[8px] h-[8px] bg-[#f1a3a4] rounded-full"></div>
                )}
              </div>
              <p className={`text-sm ${optionTool.Cat ? "text-[#f1a3a4] font-medium" : ""}`}>
                Dụng Cụ Cắt
              </p>
            </div>
            <div
              className="flex items-center gap-[10px] cursor-pointer"
              onClick={() => handleChooseTool("Dan")}
            >
              <div className="w-[16px] h-[16px] border-[1px] border-gray-300 rounded-full mt-[2px] flex items-center justify-center">
                {optionTool.Dan && (
                  <div className="w-[8px] h-[8px] bg-[#f1a3a4] rounded-full"></div>
                )}
              </div>
              <p className={`text-sm ${optionTool.Dan ? "text-[#f1a3a4] font-medium" : ""}`}>
                Kim Đan
              </p>
            </div>
            <div
              className="flex items-center gap-[10px] cursor-pointer"
              onClick={() => handleChooseTool("Moc")}
            >
              <div className="w-[16px] h-[16px] border-[1px] border-gray-300 rounded-full mt-[2px] flex items-center justify-center">
                {optionTool.Moc && (
                  <div className="w-[8px] h-[8px] bg-[#f1a3a4] rounded-full"></div>
                )}
              </div>
              <p className={`text-sm ${optionTool.Moc ? "text-[#f1a3a4] font-medium" : ""}`}>
                Kim Móc
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
          {toolData.map((item) => (
            <Items key={item.id} data={item} path={"tools"} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tools;
