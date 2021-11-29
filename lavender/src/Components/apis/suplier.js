import axiosServices from "./axiosServices";
import {API_ENDPOINT} from "../../Common/constants/index";

    
export const addSuplier=(fd, progress)=>{
    return axiosServices.post(`${API_ENDPOINT}/them-nhacungcap`, fd, {
       onUploadProgress: progressEvent=>{
        progress(progressEvent.loaded/progressEvent.total*100);
       }
    });
};

export const editSuplier=(fd, progress)=>{
    return axiosServices.post(`${API_ENDPOINT}/sua-nhacungcap`, fd, {
       onUploadProgress: progressEvent=>{
        progress(progressEvent.loaded/progressEvent.total*100);
       }
    });
};

export const allSuplier=()=>{
    return axiosServices.get(`${API_ENDPOINT}/tatca-nhacungcap`);
};


export const deleteSuplier=(manhacungcap)=>{
    return axiosServices.delete(`${API_ENDPOINT}/xoa-nhacungcap?manhacungcap=${manhacungcap}`);
};