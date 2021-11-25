import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getCoins = createAsyncThunk('coins/getCoins', async () => {
    return fetch('https://api.coingecko.com/api/v3/coins/').then((res) => res.json())

})

const coinsSlice = createSlice({
    name: 'coins',
    initialState: {
        coins: [],
        status: null
    },
    reducers: {
       
    },
    extraReducers: {
        [getCoins.pending]: (state, action) => {
            state.status = 'loading'
        },
        [getCoins.fulfilled]: (state, { payload }) => {
            state.coins = payload
            state.status = 'success'
        },
        [getCoins.rejected]: (state, action) => {
            state.status = 'failed'
        }
    },
})

export default coinsSlice.reducer