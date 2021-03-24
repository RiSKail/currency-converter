import firebase from '@/firebase'
import { call, put, select, takeEvery } from 'redux-saga/effects'
import { SIGN_IN, SIGN_UP, SIGN_OUT, FIREBASE_LOGIN } from '@/constants/actions'
import { loginSuccess, loginError, signUpSuccess, signUpError, signOutSuccess, signInUserData } from '@/actions'
import { AuthActionTypes } from '@/types/actions'
import { IKeyableObj } from '@/types/otherTypes'
import { IRootState } from '@/types/rootStateTypes'

export default function * () {
  yield takeEvery(SIGN_IN, signInWorker)
  yield takeEvery(SIGN_UP, signUpWorker)
  yield takeEvery(SIGN_OUT, signOutWorker)
  yield takeEvery(FIREBASE_LOGIN, getAuthUserDataWorker)
}

function * signInWorker ({ payload }: IKeyableObj) {
  const actionSignIn: AuthActionTypes = yield call(signInFunc, payload)
  yield put(actionSignIn)
  yield getAuthUserDataWorker()
}

function * getAuthUserDataWorker () {
  const uid: string = yield select((state: IRootState) => state.firebase.auth.uid)
  const actionUserData: AuthActionTypes = yield call(getAuthUserData, uid)
  yield put(actionUserData)
}

function * signUpWorker ({ payload }: IKeyableObj) {
  const action: AuthActionTypes = yield call(signUpFunc, payload)
  yield put(action)
}

function * signOutWorker () {
  const action: AuthActionTypes = yield call(signOutFunc)
  yield put(action)
}

async function getAuthUserData (uid: string) {
  const action = await firebase.firestore()
    .collection('users').doc(uid).get().then((res: IKeyableObj) => signInUserData(res.data()))
  return action
}

async function signOutFunc () {
  const action = await firebase.auth().signOut().then(() => signOutSuccess())
  return action
}

async function signInFunc ({ email, password }: IKeyableObj) {
  const action = await firebase.auth().signInWithEmailAndPassword(
    email,
    password,
  ).then(() => loginSuccess(),
  ).catch((err: Error) => loginError(err))
  return action
}

async function signUpFunc ({ email, password, firstName, lastName }: IKeyableObj) {
  const action = await firebase.auth().createUserWithEmailAndPassword(
    email,
    password,
  ).then((resp: IKeyableObj) => {
    return firebase.firestore().collection('users').doc(resp.user.uid).set({
      firstName,
      lastName,
      initials: firstName[0] + lastName[0],
    })
  }).then(() => signUpSuccess(),
  ).catch((err: Error) => signUpError(err))
  return action
}
