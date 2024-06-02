import lensData from "../../data/lensoi";
import toolsData from "../../data/dungcu";
import decorateData from "../../data/decorate";
import productData from "../../data/sanpham";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ViewDetailDisplay from "../ViewDetailDisplay/ViewDetailDisplay";
import ViewDetailDisplayColor from "../ViewDetailDisplay/ViewDetailDisplayColor";
import RelatedProduct from "../RelatedProduct/RelatedProduct";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";

const ViewDetail = ({ path }) => {
  const [typeData, setTypeData] = useState(null);
  const [relatedData, setRelatedData] = useState(null);
  const { lensId, toolsId, decorateId, productId } = useParams();
  useEffect(() => {
    let data;
    let datas;
    if (path === "lens") {
      data = lensData.find((e) => e.id === Number(lensId));
      datas = lensData;
    } else if (path === "tools") {
      data = toolsData.find((e) => e.id === Number(toolsId));
      datas = toolsData;
    } else if (path === "decorate") {
      data = decorateData.find((e) => e.id === Number(decorateId));
      datas = decorateData;
    } else if (path === "product") {
      data = productData.find((e) => e.id === Number(productId));
      datas = productData;
    }
    setTypeData(data);
    setRelatedData(datas);
  }, [path, lensId, toolsId, decorateId, productId]);
  console.log("Type Data", typeData);

  return (
    <div className="flex flex-col p-[20px] gap-[30px]">
      {typeData ? <BreadCrumbs path={path} data={typeData} /> : ""}
      <div>
        {typeData ? (
          <div>
            {(path === "lens" || path === "decorate") && (
              <ViewDetailDisplayColor key={typeData.id} data={typeData} />
            )}
            {(path === "tools" || path === "product") && <ViewDetailDisplay data={typeData} />}
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
      <div className="w-full mb-[30px]">
        {relatedData && <RelatedProduct path={path} data={relatedData} />}
      </div>
    </div>
  );
};

export default ViewDetail;
