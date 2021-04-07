import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import homeReducer from '@containers/home/slice';
import rootSaga from '@saga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    home: homeReducer,
  },
  middleware: [
    ...getDefaultMiddleware({thunk: false, serializableCheck: false}),
    sagaMiddleware,
  ],
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;

export default store;
