import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 1,
}

export const useStore = createSlice({
    name: 'useStore',
    initialState,
    reducers: {
        setAttractionID: (state, action) => {
            state.value = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setAttractionID } = useStore.actions

export default useStore.reducer