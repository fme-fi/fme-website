import React, { Component } from 'react';
import styled from 'styled-components';
import Finland from './../assets/others/finland.svg';
import Hungary from './../assets/others/hu.svg';
import Fun from './../assets/others/fun.svg';
import Theather from './../assets/others/theather.svg';

const BoxImage = styled.img``;
const BoxContainer = styled.div``;

class Box extends Component {
    render() {
        return (
            <BoxContainer className="boxContainer">
                <div className="box yellow">
                <BoxImage src={Finland} />
                <h1>
                    Finn hagyományápolás   
                </h1>
                </div>
                <div className="box yellow-2">
                    <BoxImage src={Hungary} />
                    <h1>
                        Finn hagyományápolás   
                    </h1>
                </div>
                <div className="box red">
                    <BoxImage src={Theather} />
                    <h1>
                        Finn hagyományápolás   
                    </h1>
                </div>
                <div className="box red-2">
                    <BoxImage src={Fun} />
                    <h1>
                        Finn hagyományápolás   
                    </h1>
                </div>
            </BoxContainer>
        )
    }
}

export default Box;