import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import useDarkMode from '../../useDarkMode';
import { useDispatch, useSelector } from 'react-redux';
import { getCoins } from './coinsSlice';
import { i18n } from '../../translations/i18n';
import { useTranslation } from "react-i18next";

import { makeStyles } from '@mui/styles';
import { style } from "./style";
import { Table, Spinner, Form, FormControl, Navbar, Button } from 'react-bootstrap';
import { night, sun, sortIcon } from '../../icons';


const useStyles = makeStyles(style);

export default function Coins() {

    const classes = useStyles();

    const { t } = useTranslation();

    const { theme, toggleTheme } = useDarkMode()

    const [search, setSearch] = useState('');
    const [clicked, setClicked] = useState(false)

    const dispatch = useDispatch()
    const { coins } = useSelector((state) => state.coins)

    const [crypto, setCrypto] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setCrypto(coins)
        setLoading(false)
    }, [coins])

    useEffect(() => {
        setLoading(true)
        dispatch(getCoins())
        setInterval(() => {
            dispatch(getCoins())
        }, 60 * 1000);
    }, [dispatch])

    const onChange = (event) => {
        event.preventDefault()
        if (event.target.value === "he") {
            document.getElementsByTagName('html')[0].setAttribute("dir", "rtl");
        } else {
            document.getElementsByTagName('html')[0].setAttribute("dir", "ltr");
        }
        i18n.changeLanguage(event.target.value);
    };

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
            copy.sort((a, b) => a.name.localeCompare(b.name))
            setCrypto(copy)
            setClicked(true)
        } else {
            const copy = [...coins]
            copy.sort((a, b) => b.name.localeCompare(a.name))
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

    return loading ? (

        <div className={classes.spinner}>
            <Spinner animation="border" role="status" />
        </div>

    ) : (

        <div className={classes.header} style={{
            background: theme === 'dark' ? '#000' : '#fff',
            color: theme === 'dark' ? '#fff' : '#000',
        }}>             
                <Button variant={theme === 'dark' ? "dark" : "light"} size="sm" type="button" onClick={toggleTheme}>
                {theme === 'dark' ? sun : night}
                    </Button>                         
                <Form.Select className={classes.select} size="sm" onChange={onChange}>
                        <option value="en">English</option>
                        <option value="he">עברית</option>
                    </Form.Select>
                    <Navbar.Brand style={{ marginTop:'1rem' }}>{t("top50")}</Navbar.Brand>             
                    <FormControl
                        style={{ width: '15rem',marginTop:'1rem' }} size="sm" type="text"
                        placeholder={t("search")} onChange={(e) => { setSearch(e.target.value) }}
                    />
            <Table responsive="md" variant={theme === 'dark' ? "dark" : "light"} className={classes.table} bordered hover>
                <thead >
                    <tr >
                        <th>{t("rank")}&nbsp;<Button size="sm" variant={theme === 'dark' ? "dark" : "light"} className={classes.sort} onClick={rankHandle}>{sortIcon}</Button> </th>
                        <th>{t("name")}&nbsp;<Button size="sm" variant={theme === 'dark' ? "dark" : "light"} className={classes.sort} onClick={nameHandle}>{sortIcon}</Button></th>
                        <th>{t("symbol")}&nbsp;<Button size="sm" variant={theme === 'dark' ? "dark" : "light"} className={classes.sort} onClick={symbolHandle}>{sortIcon}</Button></th>
                        <th>{t("price")}&nbsp;<Button size="sm" variant={theme === 'dark' ? "dark" : "light"} className={classes.sort} onClick={priceHandle}>{sortIcon}</Button></th>
                        <th>{t("change_in_1h")}&nbsp;<Button size="sm" variant={theme === 'dark' ? "dark" : "light"} className={classes.sort} onClick={h1Handle}>{sortIcon}</Button></th>
                        <th>{t("change_in_24h")}&nbsp;<Button size="sm" variant={theme === 'dark' ? "dark" : "light"} className={classes.sort} onClick={h24Handle}>{sortIcon}</Button></th>
                        <th>{t("marketCap")}&nbsp;<Button size="sm" variant={theme === 'dark' ? "dark" : "light"} className={classes.sort} onClick={rankHandle}>{sortIcon}</Button></th>
                    </tr>
                </thead>
                <tbody >
                    {crypto
                        .filter((coin) => {
                            return coin.name.toLowerCase().includes(search.toLowerCase())
                        })
                        .map((coin, i) => {

                            const change_1h = coin.market_data.price_change_percentage_1h_in_currency.usd.toFixed(2);
                            const change_24h = coin.market_data.price_change_percentage_24h.toFixed(2);
                            return (
                                <tr key={i}>
                                    <td>{coin.market_data.market_cap_rank}</td>
                                    <td>
                                        <Link to={`/${coin.id}`} key={i}>
                                            <img src={coin.image.thumb} alt='' />
                                        </Link>
                                        &nbsp;&nbsp;&nbsp;
                                        {coin.name}
                                    </td>
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