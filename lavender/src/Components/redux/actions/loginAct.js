import * as loginApi from "../../apis/login";
import * as loginConst from "../constrants/loginConst";

export const postLogin = () => {
  return {
    type: loginConst.POST_LOGIN,
  };
};

export const postLoginSuccess = (data) => {
  return {
    type: loginConst.POST_LOGIN_SUCCESS,
    payload: {
      data:data,
    },
  };
};

export const postLoginFailed = (error) => {
  return {
    type: loginConst.POST_LOGIN_FAILED,
    payload: {
      error,
    },
  };
};

export const postLoginReport =  (req) => {
  return async (dispatch) => {
    await loginApi
      .login(req)
      .then((success) => {
        if (success.status===200) dispatch(postLoginSuccess(success.data));
        else dispatch(postLoginFailed(success));
      })
      .catch((error) => {
        dispatch(postLoginFailed(error));
      });
  };
};
