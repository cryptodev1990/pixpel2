import React from "react";
import "./Section.scss"
import {Button, Menu} from "../index";
const Header = (props) => {
    let styles = {
        marginBottom: '60px'
    }
    if (props.styles) Object.assign(styles, props.styles)
    return (
        <header className="header" style={styles}>
            <div className="container">
                <div className="header__inner">
                    <div className="header__logo">
                        <img src="assets/images/logo.svg" className="logo" alt=""/>
                    </div>
                    <Menu />
                    <div className="header__group">
                        <Button>Log in</Button>
                        <Button classes="btn--brand">Register</Button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header