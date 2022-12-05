import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from "react-router-dom";
import { getCoins } from '../coins/coinsSlice';
import { Container, Row, Col, Card, ProgressBar } from 'react-bootstrap';
import { makeStyles } from '@mui/styles';
import { style } from "./style";
import { goBack } from '../../utils/icons';

const useStyles = makeStyles(style);

export default function Coin({ getValueByPath }) {

    const classes = useStyles();

    const navigate = useNavigate();
    const params = useParams();
    const dispatch = useDispatch()

    const { coins } = useSelector((state) => state.coins)

    useEffect(() => {
        dispatch(getCoins())
    }, [dispatch]);

    const data = {
        "rank": ["market_data", "market_cap_rank"],
        "_24h": ["market_data", "price_change_percentage_24h"],
        "current_price": ["market_data", "current_price", "usd"],
        "high_24h": ["market_data", "high_24h", "usd"],
        "low_24h": ["market_data", "low_24h", "usd"],
    }

    const getValue = (coin, key) => {
        return getValueByPath(coin, data[key]).toFixed(2);
    }

    return (
        <Container className={classes.container}>
            <Row >
                <Col >
                    <Card className={classes.card}>
                        {coins
                            .filter(coin => coin.id === params.coinId)
                            .map((coin, i) => {
                                return (
                                    <Card.Body key={i}>
                                        <div style={{ float: "right" }} onClick={() => navigate(-1)}>
                                            {goBack}
                                        </div>
                                        <div style={{ textAlign: 'left' }} >
                                            <Card.Title>
                                                Rank {getValue(coin,'rank')}
                                            </Card.Title>

                                            <img src={coin.image.thumb} alt='' /> {coin.name} ({coin.symbol})
                                            <div className={classes.current} >
                                                ${getValue(coin,'current_price')}&nbsp;
                                                <span style={{ fontSize: '14px', color: getValue(coin,'_24h') > 0 ? 'green' : 'red' }}>{getValue(coin,'_24h')}%</span>
                                            </div>
                                            <ProgressBar className={classes.progress} variant="warning" min={getValue(coin,'low_24h')} now={getValue(coin,'current_price')} max={getValue(coin,'high_24h')} />
                                            <div className={classes.range}>
                                                ${coin.market_data.low_24h.usd.toFixed(2)}
                                                <span >24H Range</span>
                                                <span >${coin.market_data.high_24h.usd.toFixed(2)}</span>
                                            </div>
                                        </div>
                                    </Card.Body>
                                )
                            })
                        }
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}