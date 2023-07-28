// selectedIdsSlice.ts

import {createSlice, PayloadAction} from '@reduxjs/toolkit'

// Define the initial state
const initialState: string[] = [] // Assuming selected ids are represented as strings

// Create the slice
const selectedIdsSlice = createSlice({
    name: 'selectedIds',
    initialState,
    reducers: {
        addSelectedId: (state, action: PayloadAction<string>) => {
            state.push(action.payload)
        },
        removeSelectedId: (state, action: PayloadAction<string>) => {
            const index = state.indexOf(action.payload)
            if (index !== -1) {
                state.splice(index, 1)
            }
        },
        clearSelectedIds: () => initialState,
    },
})

export const {
    addSelectedId,
    removeSelectedId,
    clearSelectedIds
} = selectedIdsSlice.actions

export default selectedIdsSlice.reducer
