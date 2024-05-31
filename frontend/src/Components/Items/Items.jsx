const Items = ({ data }) => {
  console.log(data);
  return (
    <div className="flex flex-col gap-[10px] cursor-pointer">
      <img className="h-[200px] object-fill" alt="" src={data.image} />
      <div className="text-[#000000] w-48 overflow-hidden overflow-ellipsis whitespace-nowrap">
        {data.name}
      </div>
      <div className="text-[16px] text-[#374151] font-semibold">{data.price}vnđ</div>
    </div>
  );
};

export default Items;
