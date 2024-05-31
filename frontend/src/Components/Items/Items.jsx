const Items = ({ data }) => {
  console.log(data);
  return (
    <div className="flex flex-col items-center justify-center gap-[10px] cursor-pointer">
      <img className="h-[200px] object-cover" alt="" src={data.image} />
      <div className="text-center w-48 overflow-hidden overflow-ellipsis whitespace-nowrap">
        {data.name}
      </div>
      <div className="text-center font-bold">{data.price}vnđ</div>
    </div>
  );
};

export default Items;
