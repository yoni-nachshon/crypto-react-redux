import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCoins, sortByName, sortBySymbol, sortByRank, sortByPrice, sortBy24h } from './coinsSlice';
import { useTranslation } from "react-i18next";
import '../../translations/i18n';
import { makeStyles } from '@mui/styles';
import { style } from "./style";
import { Table } from 'react-bootstrap';
import ModalCoin from '../modal/modal';

const useStyles = makeStyles(style);

export default function Coins(props) {
    const { t } = useTranslation();

    const [search, setSearch] = useState('');
    const [show, setShow] = useState(false);
    const classes = useStyles();

    const { coins } = useSelector((state) => state.coins)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCoins())
        const interval = setInterval(() => {
            dispatch(getCoins())
            console.log('update');
        }, 60 * 1000);
        return () => clearInterval(interval);
    }, [dispatch,coins])

    const sortBy = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-up" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z" />
    </svg>
    const handleShow = () => setShow(true);

    return (
        <div className={classes.list} >

                <h3>{t("allCrypto")}</h3>

                <input style={{ marginTop: '1rem', marginRight: '1rem' }} type="text" placeholder="Search..." onChange={(e) => { setSearch(e.target.value) }} />

            <Table responsive="md" className={classes.table}  hover>
                <thead >
                    <tr >
                        <th>{t("rank")} <button className={classes.sort} onClick={() => dispatch(sortByRank())}>{sortBy}</button> </th>
                        <th>{t("image")} &nbsp;</th>
                        <th>{t("name")}<button className={classes.sort} onClick={() => dispatch(sortByName())}>{sortBy}</button></th>
                        <th>{t("symbol")} <button className={classes.sort} onClick={() => dispatch(sortBySymbol())}>{sortBy}</button></th>
                        <th>{t("price")} <button className={classes.sort} onClick={() => dispatch(sortByPrice())}>{sortBy}</button></th>
                        <th>{t("change_in_24h")}<button className={classes.sort} onClick={() => dispatch(sortBy24h())}>{sortBy}</button></th>
                        <th>{t("marketCap")}<button className={classes.sort} onClick={() => dispatch(sortByRank())}>{sortBy}</button></th>
                    </tr>
                </thead>
                <tbody>
                    {coins
                        .filter((coin) => {
                            return coin.name.toLowerCase().includes(search.toLowerCase())
                        })

                        .map((coin, i) => {
                            const change = coin.price_change_percentage_24h.toFixed(2);
                            return (
                                <tr key={i}>
                                    <td >{coin.market_cap_rank}</td>
                                    <td ><img style={{ height: '20px', width: '20px' }} src={coin.image} alt='' onClick={handleShow} /></td>
                                    <td >{coin.name}</td>
                                    <td >{coin.symbol}</td>
                                    <td >${coin.current_price.toFixed(2)}</td>
                                    <td style={{ color: change > 0 ? 'green' : 'red' }}>{change}%</td>
                                    <td >{coin.market_cap.toLocaleString()}</td>
                                </tr>
                            );
                        })}
                </tbody>

            </Table>
            <ModalCoin show={show} setShow={setShow} coins={coins} />
        </div>
    )
}