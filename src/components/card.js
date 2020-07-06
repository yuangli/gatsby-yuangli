import React, { useState } from "react"
import '../styles/card.scss'
import { Link } from 'gatsby'
import { func } from 'prop-types'

const Card = (props) => {

    const [hoveredThis, setThisHovered] = React.useState(false);

    function toggleThisHover() {
        setThisHovered(!hoveredThis);
        props.toggleHover()
    }

    console.log(hoveredThis)
    console.log(props.hovered)

    return (

        <div className="c-box"
            onMouseLeave={toggleThisHover}>

            <Link to={props.name}
                onClick={toggleThisHover}
                className={hoveredThis ? 'c-box__image page1 js-is-hovered' : 'c-box__image page1 js-is-nohovered'}
            // className="c-box__image page1"
            >
                {/* <div className="c-box__image--general c-box__image--eoko"></div> */}
                {/* <img src={props.cover} /> */}
                <div onMouseEnter={toggleThisHover}
                    className={'c-box__image--general c-box__image--' + props.name}>
                    {/* className="c-box__image--general c-box__image--eoko"> */}
                </div>
            </Link>
            <div className="c-box__text">
                <h1 className={'c-h1__' + props.name}>{props.title}</h1>

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
                            <ul className={'c-cate c-cate--' + props.name}>
                                {item}
                            </ul>
                        )
                    })
                    }

                </ul>
                <Link to={props.name} onClick={toggleThisHover} className={'c-cate c-cate_button c-cate_button--' + props.name}>ViewMore</Link>

            </div>
        </div >
    )
}

export default Card