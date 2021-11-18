import {API_ENDPOINT} from "../../Common/constants/index";

export const  image=  (url, anhso)=>{
    if (anhso===undefined) anhso=0;
    return  `${API_ENDPOINT}${url}/${anhso}.jpg`;
};