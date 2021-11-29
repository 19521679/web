import * as loginConst from "../constrants/loginConst";
// import * as myToast from "../../../Common/helper/toastHelper";

const initialState = {
  hasLogined: false,
  email: "",
  password: "",
  customer:{}
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case loginConst.POST_LOGIN: {
      return { ...state, hasLogined: false, email: "", password: "", customer:{} };
    }
    case loginConst.POST_LOGIN_SUCCESS: {
      const { data } = action.payload;
      const username=  data.username;
      const password =  data.password;
      localStorage.setItem("hasLogined", true);
      localStorage.setItem("email", username);
      localStorage.setItem("password", password);
      // myToast.toastSucces("Đăng nhập thành công");
      return {
        ...state,
        hasLogined: true,
        email: data.email,
        password: data.password,
        customer:data
      };
    }
    case loginConst.POST_LOGIN_FAILED: {
      // myToast.toastError("Đăng nhập thất bại");
      localStorage.setItem("hasLogined", false);
      return { ...state, hasLogined: false, email: "", password: "" , customer:{}};
    }
    default:
      return state;
  }
};
export default reducer;
