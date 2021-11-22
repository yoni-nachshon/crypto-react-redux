import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getCoins = createAsyncThunk('coins/getCoins', async (dispatch, getState) => {
    return fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd').then((res) => res.json())

})

const coinsSlice = createSlice({
    name: 'coins',
    initialState: {
        coins: [],
        status: null
    },
    reducers: {
        sortByName: (state) => {
            state.coins = state.coins.sort((a, b) => a.name.localeCompare(b.name))
        },
        sortBySymbol: (state) => {
            state.coins = state.coins.sort((a, b) => a.symbol.localeCompare(b.symbol))
        },
        sortByRank: (state) => {
            state.coins = state.coins.sort((a, b) => a.market_cap_rank - b.market_cap_rank)
        },
        sortByPrice: (state) => {
            state.coins = state.coins.sort((a, b) => a.current_price.toFixed(2) - b.current_price.toFixed(2))
        },
        sortBy24h: (state) => {
            state.coins = state.coins.sort((a, b) => b.price_change_percentage_24h.toFixed(2) - a.price_change_percentage_24h.toFixed(2))
        }
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
export const { sortByName, sortBySymbol,  sortByRank, sortByPrice, sortBy24h } = coinsSlice.actions
export default coinsSlice.reducer