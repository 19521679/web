import axiosServices from "./axiosServices";
import { API_ENDPOINT } from "../../Common/constants/index";

export const loadCart = (request) => {
  const url = "/cart";
  return axiosServices.get(`${API_ENDPOINT}${url}?makhachhang=${request.makhachhang}`);
};
export const addToCart = (data) => {
    const url="/add-to-cart";
    console.log("addtocart"+JSON.stringify(data));
  return axiosServices.post(API_ENDPOINT + url, data);
};
export const updateCart = (data) => {
  const url="/update-cart";
return axiosServices.post(API_ENDPOINT + url, data);
};
export const deleteProduct = (data) => {
return axiosServices.delete(API_ENDPOINT + "/cart/"+data.customerid+"/delete?productid="+ data.productid);
};

