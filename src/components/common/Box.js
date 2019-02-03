import React, { Component } from 'react';
import styled from 'styled-components';
import Finland from './../assets/others/finland.svg';
import Hungary from './../assets/others/hu.svg';
import Fun from './../assets/others/fun.svg';
import Theather from './../assets/others/theather.svg';
import {Row, Col } from 'react-flexybox';

const BoxImage = styled.img``;
const BoxContainer = styled.div``;

class Box extends Component {
    render() {
        return (
            <Row center>
                <BoxContainer className="boxContainer">
                    <Col xs={12} lg={3}>
                        <div className="box yellow">
                            <BoxImage src={Finland} />
                            <h1>
                                Finnországi életünk   
                            </h1>
                        </div>
                    </Col>

                    <Col xs={12} lg={3}>
                        <div className="box yellow-2">
                            <BoxImage src={Hungary} />
                            <h1>
                                Magyar hagyományápolás   
                            </h1>
                        </div>
                    </Col>

                    <Col xs={12} lg={3}>
                        <div className="box yellow-2">
                            <BoxImage src={Hungary} />
                            <h1>
                                Magyar hagyományápolás   
                            </h1>
                        </div>
                    </Col>

                    <Col xs={12} lg={3}>
                        <div className="box red-2">
                            <BoxImage src={Fun} />
                            <h1>
                                Gyermek programok
                            </h1>
                        </div>
                    </Col>
                </BoxContainer>
            </Row>
        )
    }
}

export default Box;