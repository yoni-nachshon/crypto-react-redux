import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import useDarkMode from "../../utils/useDarkMode";
import { useDispatch, useSelector } from "react-redux";
import { getCoins } from "./coinsSlice";
import { i18n } from "../../translations/i18n";
import { useTranslation } from "react-i18next";

import { makeStyles } from "@mui/styles";
import { style } from "./style";
import { Container, Row, Col } from "react-bootstrap";
import { Table, Spinner, Form, FormControl, Button } from "react-bootstrap";
import { night, sun, sortIcon } from "../../utils/icons";

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
    event.target.value === "he" ?
      document.body.dir = i18n.dir("he") :
      document.body.dir = i18n.dir("en")
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

  const coinList = crypto.filter(coin => coin.symbol.toLowerCase().includes(search.toLowerCase()))

  return loading ? (
    <div className={classes.spinner}>
      <Spinner animation="border" role="status" />
    </div>
  ) : (
    <>
      <Container fluid className={classes.container}>
        <Row >
          <Col >
            <Button
              variant={theme === "dark" ? "dark" : "light"}
              size="sm"
              type="button"
              onClick={toggleTheme}
              className={classes.btn}
            >
              {theme === "dark" ? sun : night}
            </Button>
          </Col>

          <Col>
            <FormControl
              className={classes.input}
              size="sm"
              type="text"
              placeholder={t("search")}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </Col>
          <Col >
            <Form.Select className={classes.select} size="sm" onChange={onChange}>
              <option value="en">English</option>
              <option value="he">עברית</option>
            </Form.Select>
          </Col>
        </Row>
        {coinList.length && <div className={classes.title}>{t("top50")}</div>}

        <div className={classes.responsive} >
        <Table
          variant={theme === "dark" ? "dark" : "light"}
          className={classes.table}
          hover bordered
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
      </Container>
    </>
  );
}
