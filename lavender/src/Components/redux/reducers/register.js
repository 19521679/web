import * as registerConst from "../constrants/registerConst";
import * as myToast from "../../../Common/helper/toastHelper"
const initialState = {
  hasLogined: false,
  email: "",
  password: "",
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case registerConst.POST_REGISTER: {
      return { ...state, hasLogined: false, email: "", password: "" };
    }
    case registerConst.POST_REGISTER_SUCCESS: {
       
      const { data } = action.payload.data;
      localStorage.setItem("hasLogined", true);
      localStorage.setItem("email",data.email);
      localStorage.setItem("password",data.password);
    
      myToast.toastSucces("Đăng ký thành công");
            return {
        ...state,
        hasLogined: true,
        email: data.email,
        password: data.password,
      };
    }
    case registerConst.POST_REGISTER_FAILED: {
      myToast.toastError("Đăng ký thất bại");
        localStorage.setItem("hasLogined", false);
      return { ...state, hasLogined: false, email: "", password: "" };
    }
    default:
      return state;
  }
};
export default reducer;
