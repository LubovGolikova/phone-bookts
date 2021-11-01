import { useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import type {StoreState} from "../../../store/store";
import {loginRequest,logoutSuccess} from "../redux/slice";

function useAuth() {
    const data = useSelector((state:StoreState) => state.auth);
    const dispatch = useDispatch();
    const onLogin = useCallback(
        () => {
            console.log("onLogin!!!!");
            dispatch(loginRequest());
        }, [dispatch]
    );
    const onLogout = useCallback(() => dispatch(logoutSuccess()), [dispatch]);

    return {
        email: data.email,
        authenticated: data.authenticated,
        loaded: data.loaded,
        error: data.error,
        onLogin,
        onLogout
    }
}
export default useAuth;