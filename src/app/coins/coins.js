import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getCoins, sortByNameDesc, sortByNameAsce, sortBySymbolDesc, sortBySymbolAsce, sortByRankDesc, sortByRankAsce, sortByPriceDesc, sortByPriceAsce, sortBy1hDesc, sortBy1hAsce, sortBy24hDesc, sortBy24hAsce } from './coinsSlice';
import { useTranslation } from "react-i18next";
import '../../translations/i18n';
import { makeStyles } from '@mui/styles';
import { style } from "./style";
import { Table } from 'react-bootstrap';
// import Coin from '../coin/coin';


const useStyles = makeStyles(style);

export default function Coins(props) {

    const [clicked, setClicked] = useState(false)

    const classes = useStyles();

    const { t } = useTranslation();

    const [search, setSearch] = useState('');

    const { coins } = useSelector((state) => state.coins)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCoins())
        setInterval(() => {
            dispatch(getCoins())
        }, 60 * 1000);
    }, [dispatch])

    const sortBy = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-up" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z" />
    </svg>

    const rankHandle = () => {
        if (!clicked) {
            dispatch(sortByRankAsce())
            setClicked(true)
        } else {
            dispatch(sortByRankDesc())
            setClicked(false)
        }
    }
    const nameHandle = () => {
        if (!clicked) {
            dispatch(sortByNameAsce())
            setClicked(true)
        } else {
            dispatch(sortByNameDesc())
            setClicked(false)
        }
    }
    const symbolHandle = () => {
        if (!clicked) {
            dispatch(sortBySymbolAsce())
            setClicked(true)
        } else {
            dispatch(sortBySymbolDesc())
            setClicked(false)
        }
    }
    const priceHandle = () => {
        if (!clicked) {
            dispatch(sortByPriceAsce())
            setClicked(true)
        } else {
            dispatch(sortByPriceDesc())
            setClicked(false)
        }
    }
    const h1Handle = () => {
        if (!clicked) {
            dispatch(sortBy1hAsce())
            setClicked(true)
        } else {
            dispatch(sortBy1hDesc())
            setClicked(false)
        }
    }
    const h24Handle = () => {
        if (!clicked) {
            dispatch(sortBy24hAsce())
            setClicked(true)
        } else {
            dispatch(sortBy24hDesc())
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
                        <th>{t("rank")} <button className={classes.sort} onClick={rankHandle}>{sortBy}</button> </th>
                        <th>{t("image")} &nbsp;</th>
                        <th>{t("name")}<button className={classes.sort} onClick={nameHandle}>{sortBy}</button></th>
                        <th>{t("symbol")} <button className={classes.sort} onClick={symbolHandle}>{sortBy}</button></th>
                        <th>{t("price")} <button className={classes.sort} onClick={priceHandle}>{sortBy}</button></th>
                        <th>{t("change_in_1h")} <button className={classes.sort} onClick={h1Handle}>{sortBy}</button></th>
                        <th>{t("change_in_24h")}<button className={classes.sort} onClick={h24Handle}>{sortBy}</button></th>
                        <th>{t("marketCap")}<button className={classes.sort} onClick={rankHandle}>{sortBy}</button></th>
                    </tr>
                </thead>
                <tbody>
                    {coins
                        .filter((coin) => {
                            return coin.name.toLowerCase().includes(search.toLowerCase())
                        })

                        .map((coin, i) => {
                            const change1 = coin.market_data.price_change_percentage_1h_in_currency.usd.toFixed(2);
                            const change24 = coin.market_data.price_change_percentage_24h.toFixed(2);
                            return (
                                <tr key={i}>
                                    <td >{coin.market_data.market_cap_rank}</td>
                                    <td >
                                        <Link to={`/${coin.id}`} key={i}>
                                            <img src={coin.image.thumb} alt='' />
                                        </Link>
                                    </td>
                                    <td >{coin.name}</td>
                                    <td >{coin.symbol}</td>
                                    <td >${coin.market_data.current_price.usd.toFixed(2)}</td>
                                    <td style={{ color: change1 > 0 ? 'green' : 'red' }}>{change1}</td>
                                    <td style={{ color: change24 > 0 ? 'green' : 'red' }}>{change24}%</td>
                                    <td >${coin.market_data.market_cap.usd.toLocaleString()}</td>
                                </tr>
                            );
                        })}
                </tbody>
            </Table>

        </div>
    )
}