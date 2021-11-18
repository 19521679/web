import axiosServices from "./axiosServices";
import {API_ENDPOINT} from "../../Common/constants/index";

export const detailByBillId=(sohoadon)=>{
    return axiosServices.get(`${API_ENDPOINT}/chitietthoadon-theo-sohoadon?sohoadon=${sohoadon}`);
}