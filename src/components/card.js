import React from 'react'
import '../styles/card.scss'
import { Link } from 'gatsby'

const Card = props => {
    // function handleChange(event) {
    //     // Here, we invoke the callback with the new value
    //     props.onChange(event.target.value);
    // }

    console.log(props.hovered);

    return (

        <div className="c-box">

            <Link to={props.name} className="c-box__image page1">
                {/* <div className="c-box__image--general c-box__image--eoko"></div> */}
                {/* <img src={props.cover} /> */}
                <div onMouseEnter={props.toggleHover}
                    onMouseLeave={props.toggleHover}
                    className="c-box__image c-box__image--general c-box__image--eoko">
                </div>
            </Link>
            <div className="c-box__text">
                <h1 className="c-h1__eoko">{props.title}</h1>
                <h3 className="c-h3">{props.position}</h3>
                <p>{props.text}</p>
            </div>
            <div className="c-box__cates">
                <img src={props.logo} />
                <ul>
                    <button className="c-cate c-cate--eoko">ui/ux</button>
                    <button className="c-cate c-cate--eoko">graphic</button>
                    <button className="c-cate c-cate--eoko">Dev</button>
                </ul>
                <Link to={props.name} className="c-cate c-cate_button c-cate_button--eoko">ViewMore</Link>
            </div>
        </div >
    )
}

export default Card