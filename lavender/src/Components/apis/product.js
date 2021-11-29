import axiosServices from "./axiosServices";
import {API_ENDPOINT} from "../../Common/constants/index";

    
export const findProductByBillId=(sohoadon)=>{
    return axiosServices.get(`${API_ENDPOINT}/tim-sanpham-theo-sohoadon?sohoadon=${sohoadon}`);
};
    
export const findProductById=(masanpham)=>{
    return axiosServices.get(`${API_ENDPOINT}/tim-sanpham-theo-masanpham?masanpham=${masanpham}`);
};

export const addProduct=(fd, progress)=>{
    return axiosServices.post(`${API_ENDPOINT}/them-sanpham`, fd, {
       onUploadProgress: progressEvent=>{
        progress(progressEvent.loaded/progressEvent.total*100);
       }
    });
};

export const editProduct=(fd, progress)=>{
    return axiosServices.post(`${API_ENDPOINT}/sua-sanpham`, fd, {
       onUploadProgress: progressEvent=>{
        progress(progressEvent.loaded/progressEvent.total*100);
       }
    });
};

export const allMobileProduct=()=>{
    return axiosServices.get(`${API_ENDPOINT}/tatca-dienthoai`);
};

export const allLaptopProduct=()=>{
    return axiosServices.get(`${API_ENDPOINT}/tatca-laptop`);
};

export const deleteProduct=(masanpham)=>{
    return axiosServices.get(`${API_ENDPOINT}/xoa-sanpham?masanpham=${masanpham}`);
};