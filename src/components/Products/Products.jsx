import { Product } from "../Product/Product";
import style from "./Products.module.scss";
import { useSelector } from "react-redux";
import { Skeleton } from "../Skeleton/Skeleton";

const Products = ({ array }) => {
  const loading = useSelector((state) => state.products.loading);

  const getSkeletonArr = (count) => {
    const arr = [];
    for (let i = 0; i < count; i++) {
      arr.push(i);
    }
    return arr;
  };

  if (loading) {
    return (
      <div className={style.products}>
        {getSkeletonArr(12).map((num) => (
          <Skeleton key={num} />
        ))}
      </div>
    );
  }

  return (
    <div className={style.products}>
      {array.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export { Products };
