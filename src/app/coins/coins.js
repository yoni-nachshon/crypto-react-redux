import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import useDarkMode from "../../useDarkMode";
import { useDispatch, useSelector } from "react-redux";
import { getCoins } from "./coinsSlice";
import { i18n } from "../../translations/i18n";
import { useTranslation } from "react-i18next";

import { makeStyles } from "@mui/styles";
import { style } from "./style";
import { Table, Spinner, Form, FormControl, Navbar, Button } from "react-bootstrap";
import { night, sun, sortIcon } from "../../icons";

const useStyles = makeStyles(style);

const sortType = Object.freeze({
  asc: "asc",
  desc: "deck",
});

export default function Coins() {

  const { t } = useTranslation();

  const { theme, toggleTheme } = useDarkMode();

  const [search, setSearch] = useState("");
  const [sortMode, setSortMode] = useState(sortType.asc);

  const dispatch = useDispatch();
  const { coins } = useSelector((state) => state.coins);

  const [crypto, setCrypto] = useState([]);
  const [loading, setLoading] = useState(false);

  const classes = useStyles({
    theme: theme,
  });

  useEffect(() => {
    setCrypto(coins);
    setLoading(false);
  }, [coins]);

  useEffect(() => {
    setLoading(true);
    dispatch(getCoins());
    setInterval(() => {
      dispatch(getCoins());
    }, 60 * 1000);
  }, [dispatch]);

  const onChange = (event) => {
    event.preventDefault();
    event.target.value === "he" ? document.body.dir = i18n.dir("he") : document.body.dir = i18n.dir("en")
    i18n.changeLanguage(event.target.value)
  };

  const getValueByPath = (obj, path) => {
    let value;
    path.forEach((v, i) => {
      value = i ? value[path[i]] : obj[path[i]];
    });
    return value;
  };

  const sortHandler = (sortBy) => {
    const copy = [...coins];
    if (typeof getValueByPath(copy, [0, ...sortBy]) === "string") {
      copy.sort((a, b) => {
        const res = getValueByPath(a, sortBy).localeCompare(
          getValueByPath(b, sortBy)
        );
        return sortMode === sortType.asc ? res : -res;
      });
    } else {
      copy.sort((a, b) => {
        const res = getValueByPath(a, sortBy) - getValueByPath(b, sortBy);
        return sortMode === sortType.desc ? res : -res;
      });
    }
    setCrypto(copy);
    setSortMode(sortMode === sortType.asc ? sortType.desc : sortType.asc);
  };

  const coinList = crypto.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))

  return loading ? (
    <div className={classes.spinner}>
      <Spinner animation="border" role="status" />
    </div>
  ) : (
    <div className={classes.container}>
      <Button
        variant={theme === "dark" ? "dark" : "light"}
        size="sm"
        type="button"
        onClick={toggleTheme}
      >
        {theme === "dark" ? sun : night}
      </Button>
      <Form.Select className={classes.select} size="sm" onChange={onChange}>
        <option value="en">English</option>
        <option value="he">עברית</option>
      </Form.Select>
      <Navbar.Brand className={classes.title}>{t("top50")}</Navbar.Brand>
      <FormControl
        className={classes.input}
        size="sm"
        type="text"
        placeholder={t("search")}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />

      <Table
        responsive="md"
        variant={theme === "dark" ? "dark" : "light"}
        className={classes.table}
        bordered
        hover
      >
        {coinList.length ? (
          <thead>
            <tr>
              <th>
                {t("rank")}&nbsp;
                <Button
                  size="sm"
                  variant={theme === "dark" ? "dark" : "light"}
                  className={classes.sort}
                  onClick={() => sortHandler(["market_data", "market_cap_rank"])}
                >
                  {sortIcon}
                </Button>{" "}
              </th>
              <th>
                {t("name")}&nbsp;
                <Button
                  size="sm"
                  variant={theme === "dark" ? "dark" : "light"}
                  className={classes.sort}
                  onClick={() => sortHandler(["name"])}
                >
                  {sortIcon}
                </Button>
              </th>
              <th>
                {t("symbol")}&nbsp;
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
                {t("price")}&nbsp;
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
                {t("change_in_1h")}&nbsp;
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
                {t("change_in_24h")}&nbsp;
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
                {t("marketCap")}&nbsp;
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
                    {coin.name}
                  </td>
                  <td>{coin.symbol}</td>
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
  );
}
