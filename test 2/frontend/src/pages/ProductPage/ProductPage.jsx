import { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getProductByIdAction } from "../../store/products/actions";
import {
  getProductData,
  getProductError,
  getProductLoading,
} from "../../store/products/selectors";
import { Loader } from "../../components/Loader/Loader";
import { ErrorMessage } from "../../components/Error/Error";

import "./styles.css";

const ProductPage = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { name, price, content } = useSelector(getProductData);
  const loading = useSelector(getProductLoading);
  const error = useSelector(getProductError);

  const getProductByIdHandler = () => {
    dispatch(getProductByIdAction.request(id));
  };

  useEffect(() => {
    dispatch(getProductByIdAction.request(id));
  }, []);

  if (error) {
    return <ErrorMessage callBack={getProductByIdHandler} />;
  }

  return (
    <div className="product">
      {loading ? (
        <Loader />
      ) : (
        <>
          <h3 className="product__title">{name}</h3>
          <div className="product__price">{price} руб.</div>
          <div className="product__desc">{content}</div>
        </>
      )}
    </div>
  );
};

export { ProductPage };
