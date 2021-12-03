import axiosServices from "./axiosServices";
import {API_ENDPOINT} from "../../Common/constants/index";

    
export const addAccount=(fd, progress)=>{
    return axiosServices.post(`${API_ENDPOINT}/them-taikhoankhachhang`, fd, {
       onUploadProgress: progressEvent=>{
        progress(progressEvent.loaded/progressEvent.total*100);
       }
    });
};

export const editAccount=(fd, progress)=>{
    return axiosServices.post(`${API_ENDPOINT}/sua-taikhoankhachhang`, fd, {
       onUploadProgress: progressEvent=>{
        progress(progressEvent.loaded/progressEvent.total*100);
       }
    });
};

export const allAccount=()=>{
    return axiosServices.get(`${API_ENDPOINT}/tatca-taikhoankhachhang`);
};


export const deleteAccount=(makhachhang)=>{
    return axiosServices.delete(`${API_ENDPOINT}/xoa-taikhoankhachhang?makhachhang=${makhachhang}`);
};