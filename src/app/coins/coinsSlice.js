import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getCoins = createAsyncThunk('coins/getCoins', async (dispatch, getState) => {
    return fetch('https://api.coingecko.com/api/v3/coins/').then((res) => res.json())

})

const coinsSlice = createSlice({
    name: 'coins',
    initialState: {
        coins: [],
        status: null
    },
    reducers: {
        sortByNameDesc: (state) => {
            state.coins = state.coins.sort((a, b) => a.name.localeCompare(b.name))
        },
        sortByNameAsce: (state) => {
            state.coins = state.coins.sort((a, b) => b.name.localeCompare(a.name))
        },
        sortBySymbolDesc: (state) => {
            state.coins = state.coins.sort((a, b) => a.symbol.localeCompare(b.symbol))
        },
        sortBySymbolAsce: (state) => {
            state.coins = state.coins.sort((a, b) => b.symbol.localeCompare(a.symbol))
        },
        sortByRankDesc: (state) => {
            state.coins = state.coins.sort((a, b) => a.market_data.market_cap_rank - b.market_data.market_cap_rank)
        },
        sortByRankAsce: (state) => {
            state.coins = state.coins.sort((a, b) => b.market_data.market_cap_rank - a.market_data.market_cap_rank)
        },
        sortByPriceDesc: (state) => {
            state.coins = state.coins.sort((a, b) => a.market_data.current_price.usd.toFixed(2) - b.market_data.current_price.usd.toFixed(2))
        },
        sortByPriceAsce: (state) => {
            state.coins = state.coins.sort((a, b) => b.market_data.current_price.usd.toFixed(2) - a.market_data.current_price.usd.toFixed(2))
        },
        sortBy1hDesc: (state) => {
            state.coins = state.coins.sort((a, b) => a.market_data.price_change_percentage_1h_in_currency.usd.toFixed(2) - b.market_data.price_change_percentage_1h_in_currency.usd.toFixed(2))
        },
        sortBy1hAsce: (state) => {
            state.coins = state.coins.sort((a, b) => b.market_data.price_change_percentage_1h_in_currency.usd.toFixed(2) - a.market_data.price_change_percentage_1h_in_currency.usd.toFixed(2))
        },
        sortBy24hDesc: (state) => {
            state.coins = state.coins.sort((a, b) => a.market_data.price_change_percentage_24h.toFixed(2) - b.market_data.price_change_percentage_24h.toFixed(2))
        },
        sortBy24hAsce: (state) => {
            state.coins = state.coins.sort((a, b) => b.market_data.price_change_percentage_24h.toFixed(2) - a.market_data.price_change_percentage_24h.toFixed(2))
        },
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
export const { sortByNameDesc, sortByNameAsce, sortBySymbolDesc, sortBySymbolAsce, sortByRankDesc, sortByRankAsce, sortByPriceDesc, sortByPriceAsce, sortBy1hDesc, sortBy1hAsce, sortBy24hDesc, sortBy24hAsce } = coinsSlice.actions
export default coinsSlice.reducer