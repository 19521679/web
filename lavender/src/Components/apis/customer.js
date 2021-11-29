import axiosServices from "./axiosServices";
import {API_ENDPOINT} from "../../Common/constants/index";

    
export const findCustomerByBillId=(sohoadon)=>{
    return axiosServices.get(`${API_ENDPOINT}/tim-khachhang-theo-sohoadon?sohoadon=${sohoadon}`);
};
export const allCustomer=()=>{
    return axiosServices.get(`${API_ENDPOINT}/tatca-khachhang`);
}

export const thayDoiThongTin=(data)=>{
    return axiosServices.post(`${API_ENDPOINT}/khachhang/thaydoi`, data);
}

export const findCustomerByCustomerId=(makhachhang)=>{
    return axiosServices.get(`${API_ENDPOINT}/tim-khachhang-theo-makhachhang?makhachhang=${makhachhang}`);
};

export const thayDoiSDT=(request)=>
{
    return axiosServices.put(`${API_ENDPOINT}/khachhang/thaydoi/sdt`, request)
}

export const thayDoiEmail=(request)=>
{
    return axiosServices.put(`${API_ENDPOINT}/khachhang/thaydoi/email`, request)
}

export const addCustomer=(fd, progress)=>{
    return axiosServices.post(`${API_ENDPOINT}/them-khachhang`, fd, {
       onUploadProgress: progressEvent=>{
        progress(progressEvent.loaded/progressEvent.total*100);
       }
    });
};

export const editCustomer=(fd, progress)=>{
    return axiosServices.post(`${API_ENDPOINT}/sua-khachhang`, fd, {
       onUploadProgress: progressEvent=>{
        progress(progressEvent.loaded/progressEvent.total*100);
       }
    });
};


export const deleteCustomer=(makhachhang)=>{
    return axiosServices.delete(`${API_ENDPOINT}/xoa-khachhang?makhachhang=${makhachhang}`);
};