import React from "react";
import { Table, Button } from "react-bootstrap";
import { makeStyles } from "@mui/styles";
import { style } from "./style";
import { sortIcon } from "../../utils/icons";
import { Link } from "react-router-dom";

const useStyles = makeStyles(style);

const List = (props) => {

    const { t, theme, coinList, sortHandler } = props

    const classes = useStyles({
        theme: theme,
    });

    return (
        <div className={classes.responsive} >
            <Table
                variant={theme === "dark" ? "dark" : "light"}
                className={classes.table}
                hover 
            >
                {coinList.length ? (
                    <thead>
                        <tr>
                            <th>
                                {t("rank")} <br />
                                <Button
                                    size="sm"
                                    variant={theme === "dark" ? "dark" : "light"}
                                    className={classes.sort}
                                    onClick={() => sortHandler(["market_data", "market_cap_rank"])}
                                >
                                    {sortIcon}
                                </Button>{" "}
                            </th>
                            <th >
                                {t("coin")} <br />
                                <Button
                                    size="sm"
                                    variant={theme === "dark" ? "dark" : "light"}
                                    className={classes.sort}
                                    onClick={() => sortHandler(["symbol"])}
                                >
                                    {sortIcon}
                                </Button>
                            </th>
                            <th>
                                {t("price")} <br />
                                <Button
                                    size="sm"
                                    variant={theme === "dark" ? "dark" : "light"}
                                    className={classes.sort}
                                    onClick={() =>
                                        sortHandler(["market_data", "current_price", "usd"])
                                    }
                                >
                                    {sortIcon}
                                </Button>
                            </th>
                            <th>
                                {t("change_in_1h")} <br />
                                <Button
                                    size="sm"
                                    variant={theme === "dark" ? "dark" : "light"}
                                    className={classes.sort}
                                    onClick={() =>
                                        sortHandler([
                                            "market_data",
                                            "price_change_percentage_1h_in_currency",
                                            "usd",
                                        ])
                                    }
                                >
                                    {sortIcon}
                                </Button>
                            </th>
                            <th>
                                {t("change_in_24h")} <br />
                                <Button
                                    size="sm"
                                    variant={theme === "dark" ? "dark" : "light"}
                                    className={classes.sort}
                                    onClick={() =>
                                        sortHandler(["market_data", "price_change_percentage_24h"])
                                    }
                                >
                                    {sortIcon}
                                </Button>
                            </th>
                            <th>
                                {t("marketCap")} <br />
                                <Button
                                    size="sm"
                                    variant={theme === "dark" ? "dark" : "light"}
                                    className={classes.sort}
                                    onClick={() => sortHandler(["market_data", "market_cap_rank"])}
                                >
                                    {sortIcon}
                                </Button>
                            </th>
                        </tr>
                    </thead>
                ) : null}

                <tbody>
                    {coinList.length ?
                        coinList.map((coin, i) => {
                            const change_1h = coin.market_data.price_change_percentage_1h_in_currency.usd.toFixed(2);
                            const change_24h = coin.market_data.price_change_percentage_24h.toFixed(2);
                            return (
                                <tr key={i}>
                                    <td>{coin.market_data.market_cap_rank}</td>
                                    <td>
                                        <Link to={`/${coin.id}`} key={i}>
                                            <img src={coin.image.thumb} alt="" />
                                        </Link>
                                        &nbsp;&nbsp;&nbsp;
                                        {coin.symbol.toUpperCase()}
                                    </td>
                                    <td>${coin.market_data.current_price.usd.toFixed(2)}</td>
                                    <td style={{ color: change_1h > 0 ? "green" : "red" }}>
                                        {change_1h}%
                                    </td>
                                    <td style={{ color: change_24h > 0 ? "green" : "red" }}>
                                        {change_24h}%
                                    </td>
                                    <td>${coin.market_data.market_cap.usd.toLocaleString()}</td>
                                </tr>
                            )
                        }
                        ) : (
                            <div className={classes.notFound}>Currency not found</div>
                        )}
                </tbody>
            </Table>
        </div>
    )

}
export default List;