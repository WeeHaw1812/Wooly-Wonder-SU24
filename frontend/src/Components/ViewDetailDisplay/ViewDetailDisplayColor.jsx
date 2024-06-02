const ViewDetailDisplayColor = ({ data }) => {
  return (
    <div className="px-[20px]">
      <div className="flex items-center">
        <img className="w-3/4 h-[400px] object-contain" src={data.colorOptions[0].image} alt="" />
        <div className="detail w-1/2 flex flex-col gap-[15px]">
          <p className="text-[#f1a3a4] font-bold">{data.name}</p>
          <p>{data.description}</p>
          <div className="flex items-center gap-[5px]">
            <p className="font-medium">Chất liệu:</p>
            <p>{data.category}</p>
          </div>
          <div className="flex items-center gap-[5px]">
            <p className="font-medium">Giá:</p>
            <p>{data.price}vnđ</p>
          </div>
          <div className="color flex flex-col gap-[10px]">
            <p className="font-medium">Màu sắc khác:</p>
            <div className="grid grid-cols-9 gap-[10px]">
              {data.colorOptions.map((e) => (
                <div key={e.id} className="flex flex-col items-center">
                  <img src={e.image} alt="" />
                  <p className="w-[48px] text-center text-semibold overflow-hidden overflow-ellipsis whitespace-nowrap">
                    {e.color}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <button className="w-1/4 p-[10px] text-white bg-[#f1a3a4] rounded-md font-bold">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewDetailDisplayColor;
