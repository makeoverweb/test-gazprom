import { ROUTES } from "../../constants/routes";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  getProductsData,
  getProductsError,
  getProductsLoading,
} from "../../store/products/selectors";
import { useSelector } from "react-redux";
import { getProductsAction } from "../../store/products/actions";
import { Loader } from "../../components/Loader/Loader";
import { ErrorMessage } from "../../components/Error/Error";

import "./styles.css";

const HomePage = () => {
  const dispatch = useDispatch();

  const productsData = useSelector(getProductsData);
  const loading = useSelector(getProductsLoading);
  const error = useSelector(getProductsError);

  const getProductsHandler = () => {
    dispatch(getProductsAction.request());
  };

  useEffect(() => {
    dispatch(getProductsAction.request());
  }, []);

  if (error) {
    return <ErrorMessage callBack={getProductsHandler} />;
  }

  return (
    <div className="home">
      {loading ? (
        <Loader />
      ) : (
        productsData.map((el) => (
          <div key={el.id} className="link">
            <Link to={`${ROUTES.HOME.ROUTE}/${el.id}/details`}>{el.name}</Link>
          </div>
        ))
      )}
    </div>
  );
};

export { HomePage };
