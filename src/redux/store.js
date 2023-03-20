import { configureStore } from "@reduxjs/toolkit";
import { getDogReducer } from "./dogReducer";
import createSagaMiddleware from "@redux-saga/core";
import mySaga from "./sagas";

const sagaMiddleWare = createSagaMiddleware();
const store = configureStore({
  reducer: {
    dog: getDogReducer,
  },
  middleware: () => [sagaMiddleWare],
});

sagaMiddleWare.run(mySaga);

export default store;
