import React, { useState } from "react"
import '../styles/card.scss'
import { Link } from 'gatsby'
import { func } from 'prop-types'

const Card = (props) => {
    console.log(props.id)

    const [hoveredThis, setThisHovered] = React.useState(false);

    function toggleThisHover() {
        setThisHovered(!hoveredThis);
        props.toggleHover()
    }

    function isOdd(num) { return num % 2; }
    function mixColor(num) {
        if (isOdd(num) == 0) return 'green'
        else return 'blue'
    }

    console.log(hoveredThis)
    console.log(props.hovered)

    console.log(props.id)
    console.log(isOdd(props.id))
    return (

        <div className="c-box"
            onMouseLeave={props.hovered ? toggleThisHover : null}>

            <Link to={props.name}
                onClick={toggleThisHover}
                className={hoveredThis ? 'c-box__image page1 js-is-hovered' : 'c-box__image page1 js-is-nohovered'}
            >
                {/* <div className="c-box__image--general c-box__image--eoko"></div> */}
                {/* <img src={props.cover} /> */}
                <div className={"c-color-filter c-color-filter__" + mixColor(props.id)} >
                    <div onMouseEnter={props.hovered ? null : toggleThisHover}
                        className={'c-box__image--general c-box__image--' + props.name}>
                        {/* className="c-box__image--general c-box__image--eoko"> */}
                    </div>
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
                <Link to={props.name} onClick={props.hovered ? toggleThisHover : null} className={'c-cate c-cate_button c-cate_button--' + props.name}>ViewMore</Link>

            </div>
        </div >
    )
}

export default Card