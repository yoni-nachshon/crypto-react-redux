import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from "react-router-dom";
import { getCoins } from '../coins/coinsSlice';
import { Container, Row, Col, Card, ProgressBar } from 'react-bootstrap';
import { makeStyles } from '@mui/styles';
import { style } from "./style";
import { goBack } from '../../utils/icons';

const useStyles = makeStyles(style);

export default function Coin() {

    const classes = useStyles();

    const dispatch = useDispatch()
    const { coins } = useSelector((state) => state.coins)

    useEffect(() => {
        dispatch(getCoins())
    }, [dispatch]);

    const params = useParams();

    return (
        <Container className={classes.container}>
            <Row >
                <Col >
                    <Card className={classes.card}>
                        {coins
                            .filter(coin => coin.id === params.coinId)
                            .map((coin, i) => {
                                const _24h = coin.market_data.price_change_percentage_24h.toFixed(2);
                                const current = coin.market_data.current_price.usd.toFixed(2)
                                const high_24h = coin.market_data.high_24h.usd.toFixed(2)
                                const low_24h = coin.market_data.low_24h.usd.toFixed(2)
                                return (
                                    <Card.Body key={i}>
                                        <Link to={'/'} style={{ float: "right", color:'inherit' }}>
                                        <div style={{ float: "right" }}>{goBack}</div>
                                        </Link>

                                        <div style={{ textAlign: 'left' }} >
                                            <Card.Title>
                                                Rank {coin.market_data.market_cap_rank}
                                            </Card.Title>

                                            <img src={coin.image.thumb} alt='' /> {coin.name} ({coin.symbol})
                                            <div className={classes.current} >
                                                ${current}&nbsp;
                                                <span style={{ fontSize: '14px', color: _24h > 0 ? 'green' : 'red' }}>{_24h}%</span>
                                            </div>
                                            <ProgressBar className={classes.progress} variant="warning" min={low_24h} now={current} max={high_24h} />
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