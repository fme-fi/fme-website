import React, { Component } from 'react';

class WelcomeText extends Component {
    render() {
        return (
            <>
                {
                    !this.props.isChristmas
                        ? (
                            <div className="welcome">
                                <h1>
                                    Finnországi Magyarok Egyesülete
                                </h1>
                                <h2>
                                    Üdvözöljük honlapunkon!
                                </h2>
                            </div>
                        )
                        : null
                }
            </>
        )
    }
}

export default WelcomeText;