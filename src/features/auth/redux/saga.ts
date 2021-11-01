import {all} from 'redux-saga/effects';
// import {all, put, takeLatest} from 'redux-saga/effects';
// import {loginFail, loginSuccess} from "../../auth/redux/slice";
// import {types} from "util";



function* login() {
    console.log("auth saga");
    // try {
    //     const {email, password} = action.payload;
    //     yield put(loginSuccess());
    // } catch (error) {
    //     yield put (loginFail());
    // }

};

function* authSaga() {
    yield all([
        // yield takeLatest(types.LOGIN_REQUEST,login),
    ]);
}
export default authSaga;

