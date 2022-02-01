import React, { useEffect, useState } from "react";

import useDarkMode from "../../utils/useDarkMode";
import { useDispatch, useSelector } from "react-redux";
import { getCoins } from "./coinsSlice";
import { useTranslation } from "react-i18next";

import { makeStyles } from "@mui/styles";
import { style } from "./style";

import { Container } from "react-bootstrap";
import { Spinner } from "react-bootstrap";

import Header from "../Header";
import List from "../List";

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

        <Header
          t={t}
          setSearch={setSearch}
          theme={theme}
          toggleTheme={toggleTheme}
        />

        {coinList.length &&
          <div className={classes.title}>
            {t("top50")}
          </div>
        }

        <List
          t={t}
          theme={theme}
          coinList={coinList}
          sortHandler={sortHandler}
        />

      </Container>
    </>
  );
}
