import axiosServices from "./axiosServices";
import {API_ENDPOINT} from "../../Common/constants/index";

export const importNote=()=>{
    const url="/phieu-nhap-san-pham";
    return axiosServices.get(API_ENDPOINT+url);
}
export const addOrUpdateNote=(data)=>{
    const url="/them-sua-phieu-nhap";
    return axiosServices.post(API_ENDPOINT+url,data);
}
export const deleteNote=(maphieunhap)=>{
    const url="/xoa-phieunhap?maphieunhap=";
    return axiosServices.delete(API_ENDPOINT+url+maphieunhap);
}