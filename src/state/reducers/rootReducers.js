import Data from "../constants";
const initialState = {
  usersDetails: [],
  isLogin: false,
  loadCropDetails: [],
};

const rootReducers = (state = initialState, action) => {
  switch (action.type) {
    case Data.Load:
      return {
        ...state,
        loadCropDetails: action.payload,
      };
    case Data.usersDetails:
      const res = action.payload;
      console.log(res);
      state.usersDetails.push(res);
      console.log(state.usersDetails);
      return {
        ...state,
        usersDetails: state.usersDetails,
      };
    case Data.isCheckLogin:
      const login = action.payload;
      const isExist = state.usersDetails.filter((d) => {
        return d.email === login.email && d.password === login.password;
      });
      return {
        ...state,
        isLogin: isExist.length === 1,
      };
    default:
      return {
        ...state,
      };
  }
};
export default rootReducers;
