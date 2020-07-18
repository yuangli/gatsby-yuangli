import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useTranslation } from "react-i18next"

import '../styles/post.scss'

const SchmearItPage = () => {
    const { t } = useTranslation()

    return (
        <div className="l-post">
            <SEO title="Schmear It" />
            <div className="c-title">
                <div className="c-title__feature-img">
                    <img src={require('../images/schmearit_logo.png')} />
                </div>
                <div className="c-title__text">
                    <h1 className="c-h1__schmearit">{t('schmearit.title')}</h1>
                    <h3 className="c-h3">{t('schmearit.position')}</h3>
                    <p>{t('schmearit.abstract')}</p>
                    <ul>
                        {/* <li className="c-cate c-cate--schmearit">{t('schmearit.categories')}</li>
                        <li className="c-cate c-cate--schmearit">{t('schmearit.categories')}</li>
                        <li className="c-cate c-cate--schmearit">{t('schmearit.categories')}</li> */}
                        {t('schmearit.categories').map(function (item, key) {
                            return (
                                <li className="c-cate c-cate--schmearit">
                                    {item}
                                </li>
                            )
                        })
                        }
                    </ul>
                    <div className="c-title__buttons">
                        <a href="https://www.cloutquiz.com" className="c-cate c-cate_button c-cate_button--schmearit">{t('schmearit.button1')}</a>
                        <a href="https://itunes.apple.com/us/app/%C3%AAoko/id1297963223"
                            className="c-cate c-cate_button c-cate_button--schmearit">{t('schmearit.button2')}</a>
                    </div>
                </div>
            </div>
            <div className="l-decription">
                <img src={require('../images/schmearit_cover.png')} className="c-title-image wow fadeInUp" ></img>
                {t('schmearit.content.overview_title').split('\n').map(function (item, key) {
                    return (
                        <h1 className="wow fadeInUp" ey={key}>
                            {item}
                        </h1>
                    )
                })
                }
                {t('schmearit.content.overview').split('\n').map(function (item, key) {
                    return (
                        <p className="wow fadeInUp" ey={key}>
                            {item}
                        </p>
                    )
                })
                }
                {t('schmearit.content.context&challenge_title').split('\n').map(function (item, key) {
                    return (
                        <h1 className="wow fadeInUp" ey={key}>
                            {item}
                        </h1>
                    )
                })
                }
                {t('schmearit.content.context&challenge').split('\n').map(function (item, key) {
                    return (
                        <p className="wow fadeInUp" ey={key}>
                            {item}
                        </p>
                    )
                })
                }
                {t('schmearit.content.process&insight_title').split('\n').map(function (item, key) {
                    return (
                        <h1 className="wow fadeInUp" ey={key}>
                            {item}
                        </h1>
                    )
                })
                }
                {t('schmearit.content.process&insight1').split('\n').map(function (item, key) {
                    return (
                        <p className="wow fadeInUp" ey={key}>
                            {item}
                        </p>
                    )
                })
                }
                <div className="c-flex">
                    <img src={require('../images/schmearit_swot-4cs.jpg')} />
                    <img src={require('../images/schmearit_affinitymap.jpg')} />
                </div>
                {t('schmearit.content.process&insight2').split('\n').map(function (item, key) {
                    return (
                        <p className="wow fadeInUp" ey={key}>
                            {item}
                        </p>
                    )
                })
                }
                {t('schmearit.content.process&insight3').split('\n').map(function (item, key) {
                    return (
                        <p className="wow fadeInUp" ey={key}>
                            {item}
                        </p>
                    )
                })
                }
                <img src={require('../images/schmearit_competitive-research.png')} />
                {t('schmearit.content.process&insight4').split('\n').map(function (item, key) {
                    return (
                        <p className="wow fadeInUp" ey={key}>
                            {item}
                        </p>
                    )
                })
                }
                <img src={require('../images/schmearit_sketches.png')} />
                {t('schmearit.content.process&insight5').split('\n').map(function (item, key) {
                    return (
                        <p className="wow fadeInUp" ey={key}>
                            {item}
                        </p>
                    )
                })
                }
                <img src={require('../images/schmearit_moodboard.png')} />
                {t('schmearit.content.process&insight6').split('\n').map(function (item, key) {
                    return (
                        <p className="wow fadeInUp" ey={key}>
                            {item}
                        </p>
                    )
                })
                }
                <div className="c-flex">
                    <img src={require('../images/schmearit_paperproto.png')} />
                    <img src={require('../images/schmearit_papertesting.jpg')} />
                </div>
                {t('schmearit.content.process&insight7').split('\n').map(function (item, key) {
                    return (
                        <p className="wow fadeInUp" ey={key}>
                            {item}
                        </p>
                    )
                })
                }
                <img src={require('../images/schmearit_hifi-testing.png')} />
                {t('schmearit.content.solution_title').split('\n').map(function (item, key) {
                    return (
                        <h1 className="wow fadeInUp" ey={key}>
                            {item}
                        </h1>
                    )
                })
                }
                <img src={require('../images/schmearit_solution1.png')} />
                {t('schmearit.content.solution1').split('\n').map(function (item, key) {
                    return (
                        <p className="wow fadeInUp" ey={key}>
                            {item}
                        </p>
                    )
                })
                }
                <img src={require('../images/schmearit_solution2.png')} />
                {t('schmearit.content.solution2').split('\n').map(function (item, key) {
                    return (
                        <p className="wow fadeInUp" ey={key}>
                            {item}
                        </p>
                    )
                })
                }
                <img src={require('../images/schmearit_solution3.png')} />
                {t('schmearit.content.solution3').split('\n').map(function (item, key) {
                    return (
                        <p className="wow fadeInUp" ey={key}>
                            {item}
                        </p>
                    )
                })
                }
                {t('schmearit.content.result_title').split('\n').map(function (item, key) {
                    return (
                        <h1 className="wow fadeInUp" ey={key}>
                            {item}
                        </h1>
                    )
                })
                }
                {t('schmearit.content.result').split('\n').map(function (item, key) {
                    return (
                        <p className="wow fadeInUp" ey={key}>
                            {item}
                        </p>
                    )
                })
                }
            </div>
            {/* <Link to="/">{t('page2.link')}</Link> */}
            {/* <p>{t('schmearit.paragraph')}</p> */}
        </div>
    )
}
export default SchmearItPage