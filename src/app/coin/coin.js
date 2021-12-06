import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import { getCoins } from '../coins/coinsSlice';
import { Container, Row, Col, Card, ProgressBar } from 'react-bootstrap';



export default function Coin() {

    const dispatch = useDispatch()
    const { coins } = useSelector((state) => state.coins)

    useEffect(() => {    
        dispatch(getCoins())             
    }, [dispatch])

    const params = useParams();

    return (
        <Container style={{ marginTop: '10rem', direction:'ltr' }} >
            <Row >
                <Col md={{ span: 6, offset: 4 }} >
                    <Card style={{ width: '18rem',boxShadow: '0px 10px 30px 0px' }}>
                        {coins
                            .filter(coin => coin.id === params.coinId)
                            .map((coin, i) => {
                                const _24h = coin.market_data.price_change_percentage_24h.toFixed(2);
                                const current = coin.market_data.current_price.usd.toFixed(2)
                                const high_24h = coin.market_data.high_24h.usd.toFixed(2)
                                const low_24h = coin.market_data.low_24h.usd.toFixed(2)
                                return (
                                    <Card.Body key={i}>
                                        <div style={{ textAlign: 'left'}} >
                                            <Card.Title> Rank {coin.market_data.market_cap_rank}</Card.Title>
                                           
                                                <img src={coin.image.thumb} alt='' /> {coin.name} ({coin.symbol})
                                                <div style={{ marginTop: '0.2rem',marginBottom:'1rem', fontSize: '20px', fontWeight: 600 }}>
                                                    ${current}&nbsp;
                                                    <span style={{ fontSize: '14px', color: _24h > 0 ? 'green' : 'red' }}>{_24h}%</span>
                                                </div>
                                           
                                            <ProgressBar style={{ width: '15.5rem',height:'10px',backgroundColor:'#D3D3D3'}} variant="warning" min={low_24h}  now={current} max={high_24h} />
                                            <div style={{ fontSize: '12px', fontWeight: 600, marginTop:'0.3rem' }}> ${coin.market_data.low_24h.usd.toFixed(2)}
                                                <span style={{ marginLeft: '2.5rem' }}>24H Range</span>
                                                <span style={{ marginLeft: '2.5rem' }}>${coin.market_data.high_24h.usd.toFixed(2)}</span>
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