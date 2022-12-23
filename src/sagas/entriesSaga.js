import { call, take, put, fork } from "redux-saga/effects";
import types, {
  populateEntries,
  populateEntryDetail,
} from "../actions/entries.actions";
import axios from "axios";

export function* getAllEntries() {
  yield take(types.GET_ENTRIES);
  console.log("getting entries...");
  const data = yield call(axios, "http://localhost:3001/entries");

  yield put(populateEntries(data));
}

export function* getEntryDetails(id) {
  const { data } = yield call(axios, `http://localhost:3001/values/${id}`);
  console.log("data", data);
  yield put(populateEntryDetail(id, data));
}
export function* getAllEntriesDetails() {
  const { payload } = yield take(types.POPULATE_ENTRIES);
  for (let index = 0; index < payload.entries.length; index++) {
    const entry = payload[index];
    yield fork(getEntryDetails, entry.id);
  }
}
