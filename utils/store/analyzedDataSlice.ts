// analyzedDataSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
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
    },
});

export const { setAnalyzedData, clearAnalyzedData } = analyzedDataSlice.actions;

export default analyzedDataSlice.reducer;
