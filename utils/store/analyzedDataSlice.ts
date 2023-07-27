// analyzedDataSlice.ts
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AnalyzedData} from "@/utils/scraper";

const initialState: AnalyzedData = {
    scrapeId: '',
    data: [],
};

const analyzedDataSlice = createSlice({
    name: 'analyzedData',
    initialState,
    reducers: {
        setAnalyzedData: (state, action: PayloadAction<AnalyzedData>) => {
            return action.payload;
        },
        clearAnalyzedData: () => initialState,
        getAnalyzedData: (state, action) => {
            state.data
        }
    },
});

export const {
    setAnalyzedData,
    clearAnalyzedData,
    getAnalyzedData
} = analyzedDataSlice.actions;

export default analyzedDataSlice.reducer;
