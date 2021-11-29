import axiosServices from "./axiosServices";
import {API_ENDPOINT} from "../../Common/constants/index";

export const findVoucherById=(makhuyenmai)=>{
    return axiosServices.get(`${API_ENDPOINT}/khuyenmai?makhuyenmai=${makhuyenmai}`);
}
export const checkVoucherById=(makhuyenmai)=>{
    return axiosServices.get(`${API_ENDPOINT}/kiemtramakhuyenmai?makhuyenmai=${makhuyenmai}`);
}