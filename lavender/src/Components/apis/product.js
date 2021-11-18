import axiosServices from "./axiosServices";
import {API_ENDPOINT} from "../../Common/constants/index";

    
export const findProductById=(sohoadon)=>{
    return axiosServices.get(`${API_ENDPOINT}/tim-sanpham-theo-sohoadon?sohoadon=${sohoadon}`);
};