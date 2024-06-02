import ItemLens from "../Items/ItemLens";
import Items from "../Items/Items";

const RelatedProduct = ({ path, data }) => {
  console.log(data);
  let toArray = Array.from(data);
  console.log("to Array", toArray);
  return (
    <div className="w-full flex flex-col items-center">
      <p className="w-full text-center text-[#f1a3a4] text-[35px] font-semibold">Related Product</p>
      <div className="w-3/4 grid grid-cols-4 gap-[30px] my-[30px]">
        {path === "lens" || path === "decorate"
          ? toArray.slice(0, 4).map((item) => <ItemLens key={item.id} data={item} path={path} />)
          : toArray.slice(0, 4).map((item) => <Items key={item.id} data={item} path={path} />)}
      </div>
    </div>
  );
};

export default RelatedProduct;
