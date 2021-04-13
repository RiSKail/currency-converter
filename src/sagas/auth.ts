import firebase from '@/firebase'
import {
  call,
  put,
  select,
  takeEvery,
  PutEffect,
  CallEffect,
  SelectEffectDescriptor,
  SimpleEffect,
  PutEffectDescriptor,
} from 'redux-saga/effects'

import { SIGN_IN, SIGN_UP, SIGN_OUT, FIREBASE_SIGN } from '@/constants/actions'
import { signSuccess, signError, signUpSuccess, signOutSuccess, signInUserData } from '@/actions'
import { AuthActionTypes } from '@/types/actions'
import { KeyableObj } from '@/types/otherTypes'
import { RootState } from '@/types/rootStateTypes'

type GeneratorTypes =
  | Promise<AuthActionTypes>
  | CallEffect<AuthActionTypes>
  | SimpleEffect<'SELECT', SelectEffectDescriptor>
  | SimpleEffect<'PUT', PutEffectDescriptor<AuthActionTypes>>
  | PutEffect<AuthActionTypes>

async function signInFunc({ email, password }: KeyableObj): Promise<AuthActionTypes> {
  const action = await firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => signSuccess())
    .catch((err: Error) => signError(err))
  return action
}

async function signUpFunc({
  email,
  password,
  firstName,
  lastName,
}: KeyableObj): Promise<AuthActionTypes> {
  const action = await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((resp: KeyableObj) =>
      firebase
        .firestore()
        .collection('users')
        .doc(resp.user.uid)
        .set({
          firstName,
          lastName,
          initials: firstName[0] + lastName[0],
        })
    )
    .then(() => signUpSuccess())
    .catch((err: Error) => signError(err))
  return action
}

async function getAuthUserData(uid: string): Promise<AuthActionTypes> {
  const action = await firebase
    .firestore()
    .collection('users')
    .doc(uid)
    .get()
    .then((res: KeyableObj) => signInUserData(res.data()))
    .catch((err: Error) => signError(err))
  return action
}

function* getAuthUserDataWorker(): Generator<GeneratorTypes, void, never> {
  const uid = yield select((state: RootState) => state.firebase.auth.uid)
  const actionUserData: AuthActionTypes = yield call(getAuthUserData, uid)
  yield put(actionUserData)
}

function* signInWorker({ payload }: KeyableObj): Generator<unknown, void, AuthActionTypes> {
  const actionSignIn = yield call(signInFunc, payload)
  yield put(actionSignIn)
  yield getAuthUserDataWorker()
}

function* signUpWorker({ payload }: KeyableObj): Generator<GeneratorTypes, void, AuthActionTypes> {
  const action = yield call(signUpFunc, payload)
  yield put(action)
}

async function signOutFunc(): Promise<AuthActionTypes> {
  const action = await firebase
    .auth()
    .signOut()
    .then(() => signOutSuccess())
    .catch((err: Error) => signError(err))
  return action
}

function* signOutWorker(): Generator<GeneratorTypes, void, AuthActionTypes> {
  const action = yield call(signOutFunc)
  yield put(action)
}

export default function* (): Generator<unknown, void, unknown> {
  yield takeEvery(SIGN_IN, signInWorker)
  yield takeEvery(SIGN_UP, signUpWorker)
  yield takeEvery(SIGN_OUT, signOutWorker)
  yield takeEvery(FIREBASE_SIGN, getAuthUserDataWorker)
}
