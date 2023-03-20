import axios from "axios";
import { call, takeEvery, put } from "redux-saga/effects";
import {
  GET_DOG_REQUEST,
  GET_DOG_SUCCESS,
  GET_DOG_FAILURE,
} from "./dogConstants";

// function that makes the api request and returns a Promise for response
const fetchDog = () => {
  return axios({
    method: "GET",
    url: "https://dog.ceo/api/breeds/image/random",
  });
};

// Worker saga will be fired on GET_DOG_REQUEST actions
function* myWorkerSaga(action) {
  try {
    const response = yield call(fetchDog);
    const dog = response.data.message;

    // dispatch a success action to the store with the new dog
    yield put({ type: GET_DOG_SUCCESS, payload: dog });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: GET_DOG_FAILURE, payload: error });
  }
}

// Starts fetchDog on each dispatched GET_DOG_REQUEST action
// Allows concurrent fetches of dog
function* myWatcherSaga() {
  yield takeEvery(GET_DOG_REQUEST, myWorkerSaga);
}

export default myWatcherSaga;
