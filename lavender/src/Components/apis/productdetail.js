import axiosServices from "./axiosServices";
import {API_ENDPOINT} from "../../Common/constants/index";

    
export const addProductdetail=(fd, progress)=>{
    return axiosServices.post(`${API_ENDPOINT}/them-chitietsanpham`, fd, {
       onUploadProgress: progressEvent=>{
        progress(progressEvent.loaded/progressEvent.total*100);
       }
    });
};

export const editProductdetail=(fd, progress)=>{
    return axiosServices.post(`${API_ENDPOINT}/sua-chitietsanpham`, fd, {
       onUploadProgress: progressEvent=>{
        progress(progressEvent.loaded/progressEvent.total*100);
       }
    });
};

export const allProductdetail=()=>{
    return axiosServices.get(`${API_ENDPOINT}/tatca-chitietsanpham`);
};


export const deleteProductdetail=(imei)=>{
    return axiosServices.delete(`${API_ENDPOINT}/xoa-chitietsanpham?imei=${imei}`);
};

export const timMausacBangMasanpham=(masanpham)=>{
    return axiosServices.get(`${API_ENDPOINT}/tim-mausac-bang-masanpham?masanpham=${masanpham}`)
}
export const timDungluongBangMasanpham=(masanpham)=>{
    return axiosServices.get(`${API_ENDPOINT}/tim-dungluong-bang-masanpham?masanpham=${masanpham}`)
}