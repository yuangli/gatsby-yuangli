import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useTranslation } from "react-i18next"

import '../styles/post.scss'

const Ptf2019Page = () => {
    const { t } = useTranslation()

    return (
        <div className="l-post">
            <SEO title="Page two" />
            <div className="c-title">
                <div className="c-title__feature-img">
                    <img src={require('../images/ptf2019_logo.png')} />
                </div>
                <div className="c-title__text">
                    <h1 className="c-h1__ptf2019">{t('ptf2019.title')}</h1>
                    <h3 className="c-h3">{t('ptf2019.position')}</h3>
                    <p>{t('ptf2019.abstract')}</p>
                    <ul>
                        {/* <li className="c-cate c-cate--ptf2019">{t('ptf2019.categories')}</li>
                        <li className="c-cate c-cate--ptf2019">{t('ptf2019.categories')}</li>
                        <li className="c-cate c-cate--ptf2019">{t('ptf2019.categories')}</li> */}
                        {t('ptf2019.categories').map(function (item, key) {
                            return (
                                <li className="c-cate c-cate--ptf2019">
                                    {item}
                                </li>
                            )
                        })
                        }
                    </ul>
                    <div className="c-title__buttons">
                        <a href="https://www.cloutquiz.com" className="c-cate c-cate_button c-cate_button--ptf2019">{t('ptf2019.button1')}</a>
                        <a href="https://itunes.apple.com/us/app/%C3%AAoko/id1297963223"
                            className="c-cate c-cate_button c-cate_button--ptf2019">{t('ptf2019.button2')}</a>
                    </div>
                </div>
            </div>
            <div className="l-decription">
                <img src={require('../images/ptf2019_cover.png')} className="c-title-image wow fadeInUp" ></img>
                {t('ptf2019.content').split('\n').map(function (item, key) {
                    return (
                        <p className="wow fadeInUp" ey={key}>
                            {item}
                        </p>
                    )
                })
                }
            </div>
            {/* <Link to="/">{t('page2.link')}</Link> */}
            {/* <p>{t('ptf2019.paragraph')}</p> */}
        </div>
    )
}
export default Ptf2019Page