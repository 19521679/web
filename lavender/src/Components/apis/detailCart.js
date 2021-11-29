import axiosServices from "./axiosServices";
import { API_ENDPOINT } from "../../Common/constants/index";

export const loadDetailCartByCartId = (magiohang) => {
  return axiosServices.get(`${API_ENDPOINT}/chitietgiohang-bang-magiohang?magiohang=${magiohang}`);
};
export const setQuantityForDetailCart = (request) => {
  return axiosServices.post(`${API_ENDPOINT}/dat-soluong-cho-chitietgiohang?`, request);
};
export const deleteDetailCart = (magiohang, masanpham)=>{
  return axiosServices.delete(`${API_ENDPOINT}/xoa-chitietgiohang?magiohang=${magiohang}&masanpham=${masanpham}`);
}
export const deleteAllDetailCart = (magiohang)=>{
  return axiosServices.delete(`${API_ENDPOINT}/xoa-tatca-chitietgiohang?magiohang=${magiohang}`);
}