import axiosServices from "./axiosServices";
import {API_ENDPOINT} from "../../Common/constants/index";

    
export const addStaff=(fd, progress)=>{
    return axiosServices.post(`${API_ENDPOINT}/them-nhanvien`, fd, {
       onUploadProgress: progressEvent=>{
        progress(progressEvent.loaded/progressEvent.total*100);
       }
    });
};

export const editStaff=(fd, progress)=>{
    return axiosServices.post(`${API_ENDPOINT}/sua-nhanvien`, fd, {
       onUploadProgress: progressEvent=>{
        progress(progressEvent.loaded/progressEvent.total*100);
       }
    });
};

export const allStaff=()=>{
    return axiosServices.get(`${API_ENDPOINT}/tatca-nhanvien`);
};


export const deleteStaff=(manhanvien)=>{
    return axiosServices.delete(`${API_ENDPOINT}/xoa-nhanvien?manhanvien=${manhanvien}`);
};