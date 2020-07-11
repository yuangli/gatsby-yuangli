import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useTranslation } from "react-i18next"

import '../styles/post.scss'

const TripplePage = () => {
    const { t } = useTranslation()

    return (
        <div className="l-post">
            <SEO title="Page two" />
            <div className="c-title">
                <div className="c-title__feature-img">
                    <img src={require('../images/tripple_logo.png')} />
                </div>
                <div className="c-title__text">
                    <h1 className="c-h1__tripple">{t('tripple.title')}</h1>
                    <h3 className="c-h3">{t('tripple.position')}</h3>
                    <p>{t('tripple.abstract')}</p>
                    <ul>
                        {/* <li className="c-cate c-cate--eoko">{t('eoko.categories')}</li>
                        <li className="c-cate c-cate--eoko">{t('eoko.categories')}</li>
                        <li className="c-cate c-cate--eoko">{t('eoko.categories')}</li> */}
                        {t('tripple.categories').map(function (item, key) {
                            return (
                                <li className="c-cate c-cate--tripple">
                                    {item}
                                </li>
                            )
                        })
                        }
                    </ul>
                    <div className="c-title__buttons">
                        <a href="https://www.cloutquiz.com" className="c-cate c-cate_button c-cate_button--tripple">{t('tripple.button1')}</a>
                        <a href="https://itunes.apple.com/us/app/%C3%AAoko/id1297963223"
                            className="c-cate c-cate_button c-cate_button--tripple">{t('tripple.button2')}</a>
                    </div>
                </div>
            </div>
            <div className="l-decription">
                <img src={require('../images/tripple_cover.png')} className="c-title-image wow fadeInUp" ></img>
                {t('tripple.content').split('\n').map(function (item, key) {
                    return (
                        <p className="wow fadeInUp" ey={key}>
                            {item}
                        </p>
                    )
                })
                }
            </div>
            {/* <Link to="/">{t('page2.link')}</Link> */}
            {/* <p>{t('tripple.paragraph')}</p> */}
        </div>
    )
}
export default TripplePage