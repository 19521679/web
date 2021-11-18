import axiosServices from "./axiosServices";
import {API_ENDPOINT} from "../../Common/constants/index";

const url="/login";
    
export const login=(data)=>{
    return axiosServices.post(API_ENDPOINT+url, data);
};