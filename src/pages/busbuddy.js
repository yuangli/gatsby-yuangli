import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useTranslation } from "react-i18next"

import '../styles/post.scss'

const BusbuddyPage = () => {
    const { t } = useTranslation()

    return (
        <div className="l-post">
            <SEO title="Page two" />
            <div className="c-title">
                <div className="c-title__feature-img">
                    <img src={require('../images/busbuddy_logo.png')} />
                </div>
                <div className="c-title__text">
                    <h1 className="c-h1__busbuddy">{t('busbuddy.title')}</h1>
                    <h3 className="c-h3">{t('busbuddy.position')}</h3>
                    <p>{t('busbuddy.abstract')}</p>
                    <ul>
                        {/* <li className="c-cate c-cate--busbuddy">{t('busbuddy.categories')}</li>
                        <li className="c-cate c-cate--busbuddy">{t('busbuddy.categories')}</li>
                        <li className="c-cate c-cate--busbuddy">{t('busbuddy.categories')}</li> */}
                        {t('busbuddy.categories').map(function (item, key) {
                            return (
                                <li className="c-cate c-cate--busbuddy">
                                    {item}
                                </li>
                            )
                        })
                        }
                    </ul>
                    <div className="c-title__buttons">
                        <a href="https://www.cloutquiz.com" className="c-cate c-cate_button c-cate_button--busbuddy">{t('busbuddy.button1')}</a>
                        <a href="https://itunes.apple.com/us/app/%C3%AAoko/id1297963223"
                            className="c-cate c-cate_button c-cate_button--busbuddy">{t('busbuddy.button2')}</a>
                    </div>
                </div>
            </div>
            <div className="l-decription">
                <img src={require('../images/busbuddy_cover.png')} className="c-title-image wow fadeInUp" ></img>
                {t('busbuddy.content').split('\n').map(function (item, key) {
                    return (
                        <p className="wow fadeInUp" ey={key}>
                            {item}
                        </p>
                    )
                })
                }
            </div>
            {/* <Link to="/">{t('page2.link')}</Link> */}
            {/* <p>{t('busbuddy.paragraph')}</p> */}
        </div>
    )
}
export default BusbuddyPage