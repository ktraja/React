import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { login_api, data_api } from "../redux/actions";
import { LOGIN, DATA } from "../redux/actionTypes";

const useHttp = (requestFunction) => {
  const dispatch = useDispatch();

  const sendRequest = useCallback(
    async function (requestData) {
      const reqType = requestData.reqType;
      try {
        const responseData = await requestFunction(requestData);

        if (reqType === "DATA") {
          dispatch(
            data_api({
              type: DATA,
              error: null,
              data: responseData,
              status: "COMPLETED",
            })
          );
        } else {
          dispatch(
            login_api({
              type: LOGIN,
              user: requestData.user,
              data: responseData,
              status: reqType === "LOGIN" ? "LOGGEDIN" : "USERCREATED",
            })
          );
        }
      } catch (error) {
        if (reqType === "DATA") {
          dispatch(
            data_api({
              type: DATA,
              error: error.message,
              data: null,
              status: "DATA_ERROR",
            })
          );
        } else {
          dispatch(
            login_api({
              type: LOGIN,
              user: null,
              data: error.message,
              status: "LOGIN_ERROR",
            })
          );
        }
      }
    },
    [requestFunction, dispatch]
  );
  return { sendRequest };
};

export default useHttp;
