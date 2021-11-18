import axiosServices from "./axiosServices";
import {API_ENDPOINT} from "../../Common/constants/index";

    
export const findCustomerByBillId=(sohoadon)=>{
    return axiosServices.get(`${API_ENDPOINT}/tim-khachhang-theo-sohoadon?sohoadon=${sohoadon}`);
};