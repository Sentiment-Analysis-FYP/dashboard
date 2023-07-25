// store.ts
import { configureStore } from '@reduxjs/toolkit';
import analyzedDataReducer from './analyzedDataSlice';

const store = configureStore({
    reducer: {
        analyzedData: analyzedDataReducer,
    },
});

export default store;
