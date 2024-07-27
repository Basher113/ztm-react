import { all, call, takeLatest, put } from "redux-saga/effects";
import { USER_ACTION_TYPES } from "./user.types";
import { signInSuccess, signInFailed, signUpSucess, signUpFailed, signOutUserFailed, signOutUserSuccess } from './user.action';
import { getCurrentUser, signInUserAuthWithEmailAndPassword, createUserDocumentFromAuth, signInWithGooglePopup, createUserAuthWithEmailAndPassword, signOutUser } from "../../utils/firebase/firebase.utils";


export function* getSnapshotFromAuth(userAuth, otherInfo) {
    try {
        const userSnapshot = yield call(createUserDocumentFromAuth, userAuth, otherInfo);
        yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))
    } catch (error) {
        yield put(signInFailed(error));
    }
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield call(getCurrentUser);
        if (!userAuth) return;
        yield call(getSnapshotFromAuth, userAuth)
    } catch (e) {
        yield put(signInFailed(e))
    }
}

export function* signInWithGoogle() {
    try {
        const { user } = yield call(signInWithGooglePopup)
        yield call(getSnapshotFromAuth, user)
    } catch (error) {
        yield put(signInFailed(error))
    }
}

export function* signInWithEmail(action) {
    const { email, password } = action.payload;
    try {
        const { user } = yield call(signInUserAuthWithEmailAndPassword, email, password);
        yield call(getSnapshotFromAuth, user)
    } catch (error) {
        yield put(signInFailed(error))
    }
}

export function* signUpWithEmail(action) {
    const { email, password, displayName } = action.payload;
    try {
        const { user } = yield call(createUserAuthWithEmailAndPassword, email, password);
        yield put(signUpSucess(user, { displayName }))
    } catch (error) {
        yield put(signUpFailed(error.code))
    }
}

export function* signInAfterSignUp(action) {
    const { userAuth, otherInfo } = action.payload;
    try {
        yield call(getSnapshotFromAuth, userAuth, otherInfo)
    } catch (error) {
        yield put(signInFailed(error))
    }
}

export function* signOut() {
    try {
        yield call(signOutUser)
        yield put(signOutUserSuccess())
    } catch (error) {
        yield put(signOutUserFailed(error.code))
    }
}

export function* watchSignOutUserStart() {
    yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_USER_START, signOut)
}

export function* watchSignUpStart() {
    yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUpWithEmail)
}

export function* watchSignUpSuccess() {
    yield takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp)
}

export function* watchSignInWithEmailAndPassword() {
    yield takeLatest(USER_ACTION_TYPES.SIGN_IN_WITH_EMAIL_AND_PASSWORD_START, signInWithEmail)
}

export function* watchSignInWithGoogle() {
    yield takeLatest(USER_ACTION_TYPES.SIGN_IN_WITH_GOOGLE_START, signInWithGoogle)
}

export function* watchIsUserAuthenticated() {
    yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated)
}


export function* userSagas() {
    yield all([call(watchIsUserAuthenticated), call(watchSignInWithGoogle), call(watchSignInWithEmailAndPassword), call(watchSignUpStart), call(watchSignUpSuccess), call(watchSignOutUserStart)]);
}