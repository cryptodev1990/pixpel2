import React from "react";
const Banner = (props) => {
    let className = 'banner'
    if (props.classes) className += ` ${props.classes}`

    const bannerStyle = {
        background: `url(${props.bannerBg}) no-repeat center / cover`,
    }

    return (
        <div className={className} style={bannerStyle}>
            {props.children}
        </div>
    )
}
Banner.defaultProps = {
    classes: ''
}
export default Banner