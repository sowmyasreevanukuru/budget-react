//import { delay } from "redux-saga/effects";
import { take } from "redux-saga/effects";

export function* testSaga() {
  while (true) {
    console.log("Starting saga...");
    yield take("TEST MSG");
    console.log("saga function called");
  }
}

export function* count() {
  yield 1;
  yield 2;
  yield 3;
}
