import React, { useState } from "react"
import '../styles/card.scss'
import { Link } from 'gatsby'
import { func } from 'prop-types'

const Card = (props) => {



    // const category = props.category.map((category) =>
    //     <li>{value}</li>
    // )


    return (

        <div className="c-box"
            onMouseLeave={props.toggleHover}>

            <Link to={props.name}
                onClick={props.toggleHover}
                className={props.hovered ? 'c-box__image page1 js-is-hovered' : 'c-box__image page1 js-is-nohovered'}>
                {/* <div className="c-box__image--general c-box__image--eoko"></div> */}
                {/* <img src={props.cover} /> */}
                <div onMouseEnter={props.toggleHover}
                    className="c-box__image--general c-box__image--eoko">
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
                    {/* <ul className="c-cate c-cate--eoko">{category}</ul>
                    <ul className="c-cate c-cate--eoko">{category}</ul>
                    <ul className="c-cate c-cate--eoko">{category}</ul> */}
                    {props.category.map(function (item, key) {
                        return (
                            <ul className="c-cate c-cate--eoko">
                                {item}
                            </ul>
                        )
                    })
                    }

                </ul>
                <Link to={props.name} onClick={props.toggleHover} className="c-cate c-cate_button c-cate_button--eoko">ViewMore</Link>
            </div>
        </div >
    )
}

export default Card