import { createSlice } from '@reduxjs/toolkit';
import { defaultLang, supportedLangs } from '../../i18nConfig';

const initialState = {
    lang: defaultLang, // "en" when app loads
    supportedLangs: { ...supportedLangs },

    translations: {
        en: {
            allCrypto: "All Cryptocurrencies",
            rank: "Rank",
            image: "Image",
            name: "Name",
            symbol: "Symbol",
            price: "Price",
            change_in_24h: "24h",
            marketCap: "MarketCap",
        },
        he: {
            allCrypto: "כל מטבעות הקריפטו",
            rank: "דירוג",
            image: "תמונה",
            name: "שם",
            symbol: "סמל",
            price: "מחיר",
            change_in_24h: "24שעות",
            marketCap: "שווי שוק",
        },
    },
};

export const i18nSlice = createSlice({
    name: "i18n",
    initialState,
    reducers: {
        setLang: (state, action) => {
            state.lang = action.payload;
        },
    },
});

export const selectTranslations = (state) =>
    state.i18n.translations[state.i18n.lang];

export const { setLang } = i18nSlice.actions;
export default i18nSlice.reducer;