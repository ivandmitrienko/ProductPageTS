import { Product } from "types";
import { Constants } from "./actions";
import axios from "../../utils/config";
import { Dispatch } from "react";

export interface DispatchAction {
  product?: Product,
  type: Constants
}


export const addNewProduct = ({ nameOfProduct, nameOfPrice, image, count, id }: Product) => {
  return (dispatch: Dispatch<DispatchAction>) => {
    dispatch(addTodoStarted());

    axios
      .post('/products', {
        nameOfProduct,
        nameOfPrice,
        image,
        count,
        id
      })
      .then((res) => {
        dispatch(addTodoSuccess(res.data));
      })
      .catch((err) => {
        dispatch(addTodoFailure(err.message));
      });
  };
};

export const getProducts = () => {
  return (dispatch: Dispatch<DispatchAction>) => {
    axios
      .get('/products')
      .then((res) => {
       dispatch(addProducts(res.data))
      })
      .catch((err) => {
        dispatch(addTodoFailure(err.message));
      });
  }
}

const addProducts = (products: Product[]) => ({
  type: Constants.GET_PRODUCTS,
  products
})

const addTodoSuccess = (product: Product) => ({
  type: Constants.ADD_PRODUCT,
  product
});

const addTodoStarted = () => ({
  type: Constants.ADD_PRODUCT_STARTED,
});

const addTodoFailure = (error: Error) => ({
  type: Constants.ADD_PRODUCT_FAILURE,
  payload: {
    error,
  },
});
