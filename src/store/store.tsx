import { configureStore   } from '@reduxjs/toolkit';
// import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../redux/reducers';
// import rootSaga from '../redux/sagas';


const store = configureStore({
    reducer: rootReducer,
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rootSaga),
});

export type StoreState = ReturnType<typeof rootReducer>;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;
