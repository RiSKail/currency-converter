import { call, put, takeLatest } from 'redux-saga/effects';
import { GET_CURRENCIES_LIST } from './../constants/actions'
import { CurrenciesAPI } from './../api/api'

export default function* () {
    yield takeLatest(GET_CURRENCIES_LIST, getCurrenciesListWorker)
}

function* getCurrenciesListWorker() {
    const data = yield call(getCurrenciesListFetch)
    yield put({ type: GET_CURRENCIES_LIST, payload: data.response })
}

async function getCurrenciesListFetch(payload) {
    const data = await CurrenciesAPI.get(payload.id).then((response) => response.data);
    return await data;
}