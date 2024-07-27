import { USER_ACTION_TYPES } from "./user.types";

export const setCurrentUser = (user) => ({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user })
export const checkUserSession = () => ({ type: USER_ACTION_TYPES.CHECK_USER_SESSION });
export const signInWithGoogleStart = () => ({ type: USER_ACTION_TYPES.SIGN_IN_WITH_GOOGLE_START });
export const signInWithEmailAndPasswordStart = (email, password) => ({ type: USER_ACTION_TYPES.SIGN_IN_WITH_EMAIL_AND_PASSWORD_START, payload: { email, password } });
export const signInSuccess = (user) => ({ type: USER_ACTION_TYPES.SIGN_IN_SUCCESS, payload: user });
export const signInFailed = (error) => ({ type: USER_ACTION_TYPES.SIGN_IN_FAILED, payload: error });
export const signUpStart = (email, password, displayName) => ({ type: USER_ACTION_TYPES.SIGN_UP_START, payload: { email, password, displayName } });
export const signUpSucess = (userAuth, otherInfo) => ({ type: USER_ACTION_TYPES.SIGN_UP_SUCCESS, payload: { userAuth, otherInfo } });
export const signUpFailed = (error) => ({ type: USER_ACTION_TYPES.SIGN_UP_FAILED, payload: error });
export const signOutUserStart = () => ({ type: USER_ACTION_TYPES.SIGN_OUT_USER_START });
export const signOutUserSuccess = () => ({ type: USER_ACTION_TYPES.SIGN_OUT_USER_SUCCESS });
export const signOutUserFailed = (error) => ({ type: USER_ACTION_TYPES.SIGN_OUT_USER_FAILED, payload: error });


