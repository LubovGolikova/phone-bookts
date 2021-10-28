import { configureStore } from '@reduxjs/toolkit';
// import { composeWithDevTools } from 'redux-devtools-extension';


import rootReducer from '../redux/reducers';

// import rootSaga from '../redux/sagas';


export type StoreState = ReturnType<typeof rootReducer>;

const store = configureStore({
    reducer: rootReducer,
    // middleware:rootSaga
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;
