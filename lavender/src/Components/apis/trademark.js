import axiosServices from "./axiosServices";
import {API_ENDPOINT} from "../../Common/constants/index";

export const trademark=(maloai)=>{
    return axiosServices.get(`${API_ENDPOINT}/thuonghieu?loai=${maloai}`);
};