import Data from "../constants";

export const loadData = (data) => async (dispatch) => {
  dispatch({
    type: Data.loadData,
    payload: data,
  });
};

export const addNewUsersDetails = (data) => async (dispatch) => {
  dispatch({
    type: Data.usersDetails,
    payload: data,
  });
};

export const loadCropDetails = (data) => async (dispatch) => {
  dispatch({
    type: Data.loadCropDetails,
    payload: data,
  });
};

export const loginData = (data) => async (dispatch) => {
  dispatch({
    type: Data.isCheckLogin,
    payload: data,
  });
};
