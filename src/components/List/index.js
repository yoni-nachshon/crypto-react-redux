import React from "react";
import { Table, Button } from "react-bootstrap";
import { makeStyles } from "@mui/styles";
import { style } from "./style";
import { sortIcon } from "../../utils/icons";
import { Link } from "react-router-dom";

const useStyles = makeStyles(style);

const List = (props) => {
  const { t, theme, coinList, sortHandler } = props;

  const classes = useStyles({
    coinList: coinList,
  });

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
              <th>
                {t("rank")} <br />
                {renderSortBtn(() =>
                  sortHandler(["market_data", "market_cap_rank"])
                )}
              </th>
              <th>
                {t("coin")} <br />
                {renderSortBtn(() => sortHandler(["symbol"]))}
              </th>
              <th>
                {t("price")} <br />
                {renderSortBtn(() =>
                  sortHandler(["market_data", "current_price", "usd"])
                )}
              </th>
              <th>
                {t("change_in_1h")} <br />
                {renderSortBtn(() =>
                  sortHandler(["market_data","price_change_percentage_1h_in_currency","usd"])
                )}
              </th>
              <th>
                {t("change_in_24h")} <br />
                {renderSortBtn(() =>
                  sortHandler(["market_data", "price_change_percentage_24h"])
                )}
              </th>
              <th>
                {t("marketCap")} <br />
                {renderSortBtn(() =>
                  sortHandler(["market_data", "market_cap_rank"])
                )}
              </th>
            </tr>
          </thead>
        ) : null}
        {coinList.length ? (
          <tbody>
            {coinList.map((coin, i) => {
              const rank = coin.market_data.market_cap_rank;
              const symbol = coin.symbol.toUpperCase();
              const current_price =
                coin.market_data.current_price.usd.toFixed(2);
              const change_1h =
                coin.market_data.price_change_percentage_1h_in_currency.usd.toFixed(2);
              const change_24h =
                coin.market_data.price_change_percentage_24h.toFixed(2);
              const market_cap =
                coin.market_data.market_cap.usd.toLocaleString();
              return (
                <tr key={i}>
                  <td>{rank}</td>
                  <td>
                    <Link to={`/${coin.id}`} key={i}>
                      <img src={coin.image.thumb} alt="" />
                    </Link>
                    <span style={{ marginLeft: "0.5rem" }}>{symbol}</span>
                  </td>
                  <td>${current_price}</td>
                  <td style={{ color: change_1h > 0 ? "green" : "red" }}>
                    {change_1h}%
                  </td>
                  <td style={{ color: change_24h > 0 ? "green" : "red" }}>
                    {change_24h}%
                  </td>
                  <td style={{ width: "100px" }}>${market_cap}</td>
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
