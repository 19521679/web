import axiosServices from "./axiosServices";
import {API_ENDPOINT} from "../../Common/constants/index";
    
export const twentyhoadon=()=>{
    const url="/twenty-hoadon";
    return axiosServices.get(API_ENDPOINT+url);
};
export const processingBilling=()=>{
    const url="/hoa-don-dang-xu-ly";
    return axiosServices.get(API_ENDPOINT+url);
}
export const doanhthutheothang=(thang, nam)=>{
    return axiosServices.get(`${API_ENDPOINT}/doanh-thu-theo-thang?thang=${thang}&nam=${nam}`);
};
export const addOrUpdateBilling=(data)=>{
    const url="/them-sua-hoa-don";
    return axiosServices.post(API_ENDPOINT+url,data);
}
export const deleteBill=(sohoadon)=>{
    const url="/xoa-hoadon?sohoadon=";
    return axiosServices.delete(API_ENDPOINT+url+sohoadon);
}

export const muaHang=(makhachhang, makhuyenmai, tongtien, danhsachsanpham)=>{
    return axiosServices.post(`${API_ENDPOINT}/muahang?makhachhang=${makhachhang}&makhuyenmai=${makhuyenmai}&tongtien=${tongtien}`, danhsachsanpham)
}