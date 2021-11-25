import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getCoins } from './coinsSlice';
import { useTranslation } from "react-i18next";
import '../../translations/i18n';
import { makeStyles } from '@mui/styles';
import { style } from "./style";
import { Table } from 'react-bootstrap';

const useStyles = makeStyles(style);

export default function Coins(props) {

    const classes = useStyles();

    const { t } = useTranslation();

    const [search, setSearch] = useState('');
    const [clicked, setClicked] = useState(false)

    const dispatch = useDispatch()
    const { coins } = useSelector((state) => state.coins)

    const [crypto, setCrypto] = useState([])

    useEffect(() => {
        setCrypto(coins)
    }, [coins])

    useEffect(() => {
        dispatch(getCoins())

        setInterval(() => {
            dispatch(getCoins())
        }, 60 * 1000);
    }, [dispatch])

    const sortIcon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-up" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z" />
    </svg>

    const rankHandle = () => {
        if (!clicked) {
            const copy = [...coins]
            copy.sort((a, b) => b.market_data.market_cap_rank - a.market_data.market_cap_rank)
            setCrypto(copy)
            setClicked(true)
        } else {
            const copy = [...coins]
            copy.sort((a, b) => a.market_data.market_cap_rank - b.market_data.market_cap_rank)
            setCrypto(copy)
            setClicked(false)
        }
    }
    const nameHandle = () => {
        if (!clicked) {
            const copy = [...coins]
            copy.sort((a, b) => b.name.localeCompare(a.name))
            setCrypto(copy)
            setClicked(true)
        } else {
            const copy = [...coins]
            copy.sort((a, b) => a.name.localeCompare(b.name))
            setCrypto(copy)
            setClicked(false)
        }
    }
    const symbolHandle = () => {
        if (!clicked) {
            const copy = [...coins]
            copy.sort((a, b) => a.symbol.localeCompare(b.symbol))
            setCrypto(copy)
            setClicked(true)
        } else {
            const copy = [...coins]
            copy.sort((a, b) => b.symbol.localeCompare(a.symbol))
            setCrypto(copy)
            setClicked(false)
        }
    }
    const priceHandle = () => {
        if (!clicked) {
            const copy = [...coins]
            copy.sort((a, b) => a.market_data.current_price.usd.toFixed(2) - b.market_data.current_price.usd.toFixed(2))
            setCrypto(copy)
            setClicked(true)
        } else {
            const copy = [...coins]
            copy.sort((a, b) => b.market_data.current_price.usd.toFixed(2) - a.market_data.current_price.usd.toFixed(2))
            setCrypto(copy)
            setClicked(false)
        }
    }
    const h1Handle = () => {
        if (!clicked) {
            const copy = [...coins]
            copy.sort((a, b) => a.market_data.price_change_percentage_1h_in_currency.usd.toFixed(2) - b.market_data.price_change_percentage_1h_in_currency.usd.toFixed(2))
            setCrypto(copy)
            setClicked(true)
        } else {
            const copy = [...coins]
            copy.sort((a, b) => b.market_data.price_change_percentage_1h_in_currency.usd.toFixed(2) - a.market_data.price_change_percentage_1h_in_currency.usd.toFixed(2))
            setCrypto(copy)
            setClicked(false)
        }
    }
    const h24Handle = () => {
        if (!clicked) {
            const copy = [...coins]
            copy.sort((a, b) => a.market_data.price_change_percentage_24h.toFixed(2) - b.market_data.price_change_percentage_24h.toFixed(2))
            setCrypto(copy)
            setClicked(true)
        } else {
            const copy = [...coins]
            copy.sort((a, b) => b.market_data.price_change_percentage_24h.toFixed(2) - a.market_data.price_change_percentage_24h.toFixed(2))
            setCrypto(copy)
            setClicked(false)
        }
    }

    return (
        <div className={classes.list} >

            <h3>{t("allCrypto")}</h3>

            <input style={{ marginTop: '1rem', marginRight: '1rem' }} type="text" placeholder={t("search")} onChange={(e) => { setSearch(e.target.value) }} />

            <Table responsive="md" className={classes.table} hover>
                <thead >
                    <tr >
                        <th>{t("rank")} <button className={classes.sort} onClick={rankHandle}>{sortIcon}</button> </th>
                        <th>{t("image")} &nbsp;</th>
                        <th>{t("name")}<button className={classes.sort} onClick={nameHandle}>{sortIcon}</button></th>
                        <th>{t("symbol")} <button className={classes.sort} onClick={symbolHandle}>{sortIcon}</button></th>
                        <th>{t("price")} <button className={classes.sort} onClick={priceHandle}>{sortIcon}</button></th>
                        <th>{t("change_in_1h")} <button className={classes.sort} onClick={h1Handle}>{sortIcon}</button></th>
                        <th>{t("change_in_24h")}<button className={classes.sort} onClick={h24Handle}>{sortIcon}</button></th>
                        <th>{t("marketCap")}<button className={classes.sort} onClick={rankHandle}>{sortIcon}</button></th>
                    </tr>
                </thead>
                <tbody>
                    {crypto
                        .filter((coin) => {
                            return coin.name.toLowerCase().includes(search.toLowerCase())
                        })
                        .map((coin, i) => {

                            const change_1h = coin.market_data.price_change_percentage_1h_in_currency.usd.toFixed(2);
                            const change_24h = coin.market_data.price_change_percentage_24h.toFixed(2);
                            return (
                                <tr key={i}>
                                    <td >{coin.market_data.market_cap_rank}</td>
                                    <td >
                                        <Link to={`/${coin.id}`} key={i}>
                                            <img src={coin.image.thumb} alt='' />
                                        </Link>
                                    </td>
                                    <td >{coin.name} </td>
                                    <td >{coin.symbol}</td>
                                    <td >${coin.market_data.current_price.usd.toFixed(2)}</td>
                                    <td style={{ color: change_1h > 0 ? 'green' : 'red' }}>{change_1h}%</td>
                                    <td style={{ color: change_24h > 0 ? 'green' : 'red' }}>{change_24h}%</td>
                                    <td >${coin.market_data.market_cap.usd.toLocaleString()}</td>
                                </tr>
                            );
                        })}

                </tbody>
            </Table>

        </div>
    )
}