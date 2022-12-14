import ActionTypes from './ActionTypes';

const initialState = {
  accounts: [],
  loading: false,
  error: false,
};

const AccountsDataReducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case ActionTypes.FETCH_DATA_LOADING:
      return {
        ...state, loading: true, error: false,
      };
    case ActionTypes.GET_ACCOUNT_LIST:
      return {
        ...state, accounts: payload.data, loading: false, error: false,
      };
    case ActionTypes.FETCH_DATA_ERROR:
      return {
        ...state, error: true,
      };
    default:
      return state;
  }
};
export default AccountsDataReducer;
