import React from "react";
import { Table, Button } from "react-bootstrap";
import { makeStyles } from "@mui/styles";
import { style } from "./style";
import { sortIcon } from "../../utils/icons";
import { Link } from "react-router-dom";

const useStyles = makeStyles(style);

const List = (props) => {
  const { t, theme, coinList, sortHandler } = props;

  const classes = useStyles();

  const renderSortBtn = (sortFunc) => (
    <Button
      size="sm"
      variant={theme === "dark" ? "dark" : "light"}
      className={classes.sort}
      onClick={sortFunc}
    >
      {sortIcon}
    </Button>
  );

  const sortByName = {
    "rank": ["market_data", "market_cap_rank"],
    "coin": ["symbol"],
    "price": ["market_data", "current_price", "usd"],
    "change_in_1h": ["market_data", "price_change_percentage_1h_in_currency", "usd"],
    "change_in_24h": ["market_data", "price_change_percentage_24h"],
    "marketCap": ["market_data", "market_cap_rank"],
  };

  return (
    <div className={classes.responsive}>
      <Table
        variant={theme === "dark" ? "dark" : "light"}
        className={classes.table}
        hover
      >
        {coinList.length ? (
          <thead>
            <tr>
              {Object.entries(sortByName).map(([key, value]) => (
                <th>
                  {t(key)} <br />
                  {renderSortBtn(() => sortHandler([value]))}
                </th>
              ))}
            </tr>
          </thead>
        ) : null}
        {coinList.length ? (
          <tbody>
            {coinList.map((coin, i) => {
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
                  <td style={{ width: "100px" }}>
                    ${coin.market_data.market_cap.usd.toLocaleString()}
                  </td>
                </tr>
              );
            })}
          </tbody>
        ) : (
          <div className={classes.notFound}>Currency not found</div>
        )}
      </Table>
    </div>
  );
};
export default List;
