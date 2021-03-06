import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useTranslation } from "react-i18next"
import VisualStyleGuide from '../assets/busbuddy_visualStyleGuide.pdf';
import LanguageStyleGuide from '../assets/busbuddy_languageStyleGuide.png';


import '../styles/post.scss'

const BusbuddyPage = () => {
    const { t } = useTranslation()

    return (
        <div className="l-post">
            <SEO title="BusBuddy" />
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
                        <a target="_blank" href="https://digm.drexel.edu/idm/2019/03/20/bus-buddy/" className="c-cate c-cate_button c-cate_button--busbuddy">{t('busbuddy.button1')}</a>
                        <a target="_blank" href="https://github.com/yuangli/busbuddy" className="c-cate c-cate_button c-cate_button--busbuddy">{t('busbuddy.button2')}</a>
                    </div>
                </div>
            </div>
            <div className="l-decription">
                <img src={require('../images/busbuddy_cover.png')} className="c-title-image wow fadeInUp" ></img>
                {t('busbuddy.content.overview_title').split('\n').map(function (item, key) {
                    return (
                        <h1 className="wow fadeInUp" ey={key}>
                            {item}
                        </h1>
                    )
                })
                }
                {t('busbuddy.content.overview').split('\n').map(function (item, key) {
                    return (
                        <p className="wow fadeInUp" ey={key}>
                            {item}
                        </p>
                    )
                })
                }
                {t('busbuddy.content.process&insight_title').split('\n').map(function (item, key) {
                    return (
                        <h1 className="wow fadeInUp" ey={key}>
                            {item}
                        </h1>
                    )
                })
                }
                {t('busbuddy.content.process&insight_1_title').split('\n').map(function (item, key) {
                    return (
                        <h2 className="wow fadeInUp" ey={key}>
                            {item}
                        </h2>
                    )
                })
                }
                {t('busbuddy.content.process&insight_1').split('\n').map(function (item, key) {
                    return (
                        <p className="wow fadeInUp" ey={key}>
                            {item}
                        </p>
                    )
                })
                }
                {t('busbuddy.content.process&insight_2_title').split('\n').map(function (item, key) {
                    return (
                        <h2 className="wow fadeInUp" ey={key}>
                            {item}
                        </h2>
                    )
                })
                }
                {t('busbuddy.content.process&insight_2_1').split('\n').map(function (item, key) {
                    return (
                        <p className="wow fadeInUp" ey={key}>
                            {item}
                        </p>
                    )
                })
                }
                {t('busbuddy.content.process&insight_3_title').split('\n').map(function (item, key) {
                    return (
                        <h1 className="wow fadeInUp" ey={key}>
                            {item}
                        </h1>
                    )
                })
                }
                {t('busbuddy.content.process&insight_3').split('\n').map(function (item, key) {
                    return (
                        <p className="wow fadeInUp" ey={key}>
                            {item}
                        </p>
                    )
                })
                }
                <img src={require('../images/busbuddy_flowchart.jpg')} className="c-title-image wow fadeInUp" />
                {t('busbuddy.content.process&insight_4_title').split('\n').map(function (item, key) {
                    return (
                        <h1 className="wow fadeInUp" ey={key}>
                            {item}
                        </h1>
                    )
                })
                }
                {t('busbuddy.content.process&insight_4').split('\n').map(function (item, key) {
                    return (
                        <p className="wow fadeInUp" ey={key}>
                            {item}
                        </p>
                    )
                })
                }
                <img src={require('../images/busbuddy_styleguide.png')} className="c-title-image wow fadeInUp" />
                <div className="c-flex c-flex--links">
                    {t('busbuddy.content.process&insight_4_visuallink').split('\n').map(function (item, key) {
                        return (
                            <a target="_blank" href={VisualStyleGuide}>{item}</a>
                        )
                    })
                    }
                    {t('busbuddy.content.process&insight_4_languagelink').split('\n').map(function (item, key) {
                        return (
                            <a target="_blank" href={LanguageStyleGuide}>{item}</a>
                        )
                    })
                    }
                </div>
                {t('busbuddy.content.process&insight_5_title').split('\n').map(function (item, key) {
                    return (
                        <h1 className="wow fadeInUp" ey={key}>
                            {item}
                        </h1>
                    )
                })
                }
                <img src={require('../images/busbuddy_low-fi-prototype.png')} className="c-title-image wow fadeInUp" />
                <div className="c-flex--flex">
                    <img src={require('../images/busbuddy_high-fi-prototype1.gif')} className="c-title-image wow fadeInUp" />
                    <img src={require('../images/busbuddy_high-fi-prototype2.gif')} className="c-title-image wow fadeInUp" />
                </div>
                <div className="c-flex--flex c-flex--busbuddyPrototype2 c-margin-bottom">
                    <img src={require('../images/busbuddy_high-fi-prototype3.gif')} className="c-title-image wow fadeInUp" />
                    <img src={require('../images/busbuddy_high-fi-prototype4.gif')} className="c-title-image wow fadeInUp" />
                </div>
                {t('busbuddy.content.development_title').split('\n').map(function (item, key) {
                    return (
                        <h1 className="wow fadeInUp" ey={key}>
                            {item}
                        </h1>
                    )
                })
                }
                {t('busbuddy.content.development_1_title').split('\n').map(function (item, key) {
                    return (
                        <h2 className="wow fadeInUp" ey={key}>
                            {item}
                        </h2>
                    )
                })
                }
                {t('busbuddy.content.development_1').split('\n').map(function (item, key) {
                    return (
                        <p className="wow fadeInUp" ey={key}>
                            {item}
                        </p>
                    )
                })
                }
                <img src={require('../images/busbuddy_pi.png')} className="c-title-image wow fadeInUp" />
                {t('busbuddy.content.development_2').split('\n').map(function (item, key) {
                    return (
                        <p className="wow fadeInUp" ey={key}>
                            {item}
                        </p>
                    )
                })
                }
                {t('busbuddy.content.solution_title').split('\n').map(function (item, key) {
                    return (
                        <h1 className="wow fadeInUp" ey={key}>
                            {item}
                        </h1>
                    )
                })
                }
                <img src={require('../images/busbuddy_result.jpg')} className="c-title-image wow fadeInUp" />
                {t('busbuddy.content.solution').split('\n').map(function (item, key) {
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