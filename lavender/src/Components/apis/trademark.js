import axiosServices from "./axiosServices";
import { API_ENDPOINT } from "../../Common/constants/index";

export const trademark = (maloai) => {
  return axiosServices.get(`${API_ENDPOINT}/thuonghieu?loai=${maloai}`);
};
export const findTrademarkIdByName = (tenthuonghieu) => {
  return axiosServices.get(
    `${API_ENDPOINT}/tim-mathuonghieu-bang-tenthuonghieu?tenthuonghieu=${tenthuonghieu}`
  );
};

export const addTrademark = (fd, progress) => {
  return axiosServices.post(`${API_ENDPOINT}/them-thuonghieu`, fd, {
    onUploadProgress: (progressEvent) => {
      progress((progressEvent.loaded / progressEvent.total) * 100);
    },
  });
};

export const editTrademark = (fd, progress) => {
  return axiosServices.post(`${API_ENDPOINT}/sua-thuonghieu`, fd, {
    onUploadProgress: (progressEvent) => {
      progress((progressEvent.loaded / progressEvent.total) * 100);
    },
  });
};

export const allTrademark = () => {
  return axiosServices.get(`${API_ENDPOINT}/tatca-thuonghieu`);
};

export const deleteTrademark = (mathuonghieu) => {
  return axiosServices.delete(
    `${API_ENDPOINT}/xoa-thuonghieu?mathuonghieu=${mathuonghieu}`
  );
};

export const timThuonghieu = (timkiem) => {
  return axiosServices.get(`${API_ENDPOINT}/tim-thuonghieu?timkiem=${timkiem}`);
};
