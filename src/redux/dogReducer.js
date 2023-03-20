import {
  GET_DOG_REQUEST,
  GET_DOG_SUCCESS,
  GET_DOG_FAILURE,
} from "./dogConstants";

export const getDogReducer = (
  state = { loading: false, data: null, error: null },
  action
) => {
  switch (action.type) {
    case GET_DOG_REQUEST:
      return { loading: true, data: null, error: null };

    case GET_DOG_SUCCESS:
      return { loading: false, data: action.payload, error: null };

    case GET_DOG_FAILURE:
      return { loading: false, data: null, error: action.payload };

    default:
      return state;
  }
};
