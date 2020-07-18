import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useTranslation } from "react-i18next"

import '../styles/post.scss'

const Gs1Page = () => {

    const { t } = useTranslation()

    return (
        <div className="l-post">
            <SEO title="GS1 Global" />
            <div className="c-title">
                <div className="c-title__feature-img">
                    <img src={require('../images/gs1_logo.png')} />
                </div>
                <div className="c-title__text">
                    <h1 className="c-h1__gs1">{t('gs1.title')}</h1>
                    <h3 className="c-h3">{t('gs1.position')}</h3>
                    <p>{t('gs1.abstract')}</p>
                    <ul>
                        {/* <li className="c-cate c-cate--gs1">{t('gs1.categories')}</li>
                        <li className="c-cate c-cate--gs1">{t('gs1.categories')}</li>
                        <li className="c-cate c-cate--gs1">{t('gs1.categories')}</li> */}
                        {t('gs1.categories').map(function (item, key) {
                            return (
                                <li className="c-cate c-cate--gs1">
                                    {item}
                                </li>
                            )
                        })
                        }
                    </ul>
                    <div className="c-title__buttons">
                        <a href="https://www.cloutquiz.com" className="c-cate c-cate_button c-cate_button--gs1">{t('gs1.button1')}</a>
                        <a href="https://itunes.apple.com/us/app/%C3%AAoko/id1297963223"
                            className="c-cate c-cate_button c-cate_button--gs1">{t('gs1.button2')}</a>
                    </div>
                </div>
            </div>
            <div className="l-decription">
                <img src={require('../images/gs1_cover.png')} className="c-title-image wow fadeInUp" ></img>
                {t('gs1.content.myrole_title').split('\n').map(function (item, key) {
                    return (
                        <h1 className="wow fadeInUp" ey={key}>
                            {item}
                        </h1>
                    )
                })
                }
                {t('gs1.content.myrole').split('\n').map(function (item, key) {
                    return (
                        <p className="wow fadeInUp" ey={key}>
                            {item}
                        </p>
                    )
                })
                }
                {t('gs1.content.highlights_title').split('\n').map(function (item, key) {
                    return (
                        <h1 className="wow fadeInUp" ey={key}>
                            {item}
                        </h1>
                    )
                })
                }
                {t('gs1.content.highlights_resolver_title').split('\n').map(function (item, key) {
                    return (
                        <h2 className="wow fadeInUp" ey={key}>
                            {item}
                        </h2>
                    )
                })
                }
                {t('gs1.content.highlights_resolver').split('\n').map(function (item, key) {
                    return (
                        <p className="wow fadeInUp" ey={key}>
                            {item}
                        </p>
                    )
                })
                }
                {t('gs1.content.highlights_activate_title').split('\n').map(function (item, key) {
                    return (
                        <h2 className="wow fadeInUp" ey={key}>
                            {item}
                        </h2>
                    )
                })
                }
                {t('gs1.content.highlights_activate').split('\n').map(function (item, key) {
                    return (
                        <p className="wow fadeInUp" ey={key}>
                            {item}
                        </p>
                    )
                })
                }
                {t('gs1.content.highlights_ba_title').split('\n').map(function (item, key) {
                    return (
                        <h2 className="wow fadeInUp" ey={key}>
                            {item}
                        </h2>
                    )
                })
                }
                {t('gs1.content.highlights_ba').split('\n').map(function (item, key) {
                    return (
                        <p className="wow fadeInUp" ey={key}>
                            {item}
                        </p>
                    )
                })
                }
            </div>
            {/* <Link to="/">{t('page2.link')}</Link> */}
            {/* <p>{t('gs1.paragraph')}</p> */}
        </div>
    )
}
export default Gs1Page