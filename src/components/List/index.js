import React, { useState } from "react";
import { Table, Button, Dropdown, Toast } from "react-bootstrap";
import { makeStyles } from "@mui/styles";
import { style } from "./style";
import { sortIcon } from "../../utils/icons";
import { Link } from "react-router-dom";

const useStyles = makeStyles(style);

const List = (props) => {
  const { t, theme, coinList, sortHandler, getValueByPath, show, toggleShow } = props;

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
    "marketCap": ["market_data", "market_cap", "usd"],
  };

  const getValue = (coin, key) => {
    return getValueByPath(coin, sortByName[key]);
  }

  return (
    <div className={classes.responsive}>

      <Toast show={show} onClose={toggleShow}>
      <Toast.Header>
        <strong className="me-auto">Tip!</strong>
      </Toast.Header>
      <Toast.Body style={{color: 'InfoText'}}> Click on any coin to see more details. </Toast.Body>
    </Toast>

      {/* <Dropdown>
        <Dropdown.Toggle>
          {t("sort_by")}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {Object.entries(sortByName).map(([key, value], i) => (
            <Dropdown.Item
              onClick={() => renderSortBtn(sortHandler(value))}
              eventKey={i}>
              {t(key)}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown> */}

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
                  {t(key)} 
                  {renderSortBtn(() => sortHandler(value))}
                </th>
              ))}
            </tr>
          </thead>
        ) : null}

        {coinList.length ? (
          <tbody>
            {coinList.map((coin, i) => {
              return (
                <tr key={i}>
                  <td>{getValue(coin, 'rank')}</td>
                  <td>
                    <Link to={`/${coin.id}`} key={i}>
                      <img src={coin.image.thumb} alt="" />
                    </Link>
                    &nbsp;&nbsp;&nbsp;
                    {coin.symbol.toUpperCase()}
                  </td>
                  <td>${getValue(coin, 'price').toFixed(2)}</td>
                  <td style={{ color: getValue(coin, 'change_in_1h') > 0 ? "green" : "red" }}>
                    {getValue(coin, 'change_in_1h').toFixed(2)}%
                  </td>
                  <td style={{ color: getValue(coin, 'change_in_24h') > 0 ? "green" : "red" }}>
                    {getValue(coin, 'change_in_24h').toFixed(2)}%
                  </td>
                  <td style={{ width: "100px" }}>
                    ${getValue(coin, 'marketCap').toLocaleString()}
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
