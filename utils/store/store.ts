// store.ts
import {configureStore} from '@reduxjs/toolkit';
import analyzedDataReducer from './analyzedDataSlice';
import selectedIdsReducer from './selectedIdsSlice'

const store = configureStore({
    reducer: {
        analyzedData: analyzedDataReducer,
        selectedIds: selectedIdsReducer
    },
});

export default store;
