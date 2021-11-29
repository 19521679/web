import axiosServices from "./axiosServices";
import {API_ENDPOINT} from "../../Common/constants/index";

export const myVoucher=(makhachhang)=>{
    return axiosServices.get(`${API_ENDPOINT}/khuyenmaicuatoi?makhachhang=${makhachhang}`);
}

export const detailMyVoucher=(makhachhang)=>{
    return axiosServices.get(`${API_ENDPOINT}/chitietkhuyenmaicuatoi?makhachhang=${makhachhang}`);
}

export const deleteMyVoucher=(makhachhang, makhuyenmai)=>{
    return axiosServices.delete(`${API_ENDPOINT}/khuyenmaicuatoi?makhachhang=${makhachhang}&makhuyenmai=${makhuyenmai}`);
}
export const deleteAllMyVoucher=(makhachhang)=>{
    return axiosServices.delete(`${API_ENDPOINT}/xoa-tatca-khuyenmaicuatoi?makhachhang=${makhachhang}`);
}