import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useTranslation } from "react-i18next"
import testingsReport1 from '../assets/tripple_report1.png';
import testingsReport2 from '../assets/tripple_report2.png';
import StyleGuide from '../assets/tripple_styleGuide.pdf';
import Storyboard from '../assets/tripple_storyboard.pdf';


import '../styles/post.scss'

const TripplePage = () => {
    const { t } = useTranslation()

    return (
        <div className="l-post">
            <SEO title="Tripple" />
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
                        <a target="_blank" href="https://github.com/ethereal-immersive" className="c-cate c-cate_button c-cate_button--tripple">{t('tripple.button1')}</a>
                        <a target="_blank" href="https://youtu.be/nfxYTUdVNMA"
                            className="c-cate c-cate_button c-cate_button--tripple">{t('tripple.button2')}</a>
                    </div>
                </div>
            </div>
            <div className="l-decription">
                <img src={require('../images/tripple_cover.png')} className="c-title-image wow fadeInUp" ></img>
                {t('tripple.content.overview_title').split('\n').map(function (item, key) {
                    return (
                        <h1 className="wow fadeInUp" ey={key}>
                            {item}
                        </h1>
                    )
                })
                }
                {t('tripple.content.overview').split('\n').map(function (item, key) {
                    return (
                        <p className="wow fadeInUp" ey={key}>
                            {item}
                        </p>
                    )
                })
                }
                {t('tripple.content.pm_title').split('\n').map(function (item, key) {
                    return (
                        <h1 className="wow fadeInUp" ey={key}>
                            {item}
                        </h1>
                    )
                })
                }
                {t('tripple.content.pm_team_title').split('\n').map(function (item, key) {
                    return (
                        <h2 className="wow fadeInUp" ey={key}>
                            {item}
                        </h2>
                    )
                })
                }
                {t('tripple.content.pm_team').split('\n').map(function (item, key) {
                    return (
                        <p className="wow fadeInUp" ey={key}>
                            {item}
                        </p>
                    )
                })
                }
                {t('tripple.content.pm_agileWorkflow_title').split('\n').map(function (item, key) {
                    return (
                        <h2 className="wow fadeInUp" ey={key}>
                            {item}
                        </h2>
                    )
                })
                }
                {t('tripple.content.pm_agileWorkflow').split('\n').map(function (item, key) {
                    return (
                        <p className="wow fadeInUp" ey={key}>
                            {item}
                        </p>
                    )
                })
                }
                {t('tripple.content.pm_tools_title').split('\n').map(function (item, key) {
                    return (
                        <h2 className="wow fadeInUp" ey={key}>
                            {item}
                        </h2>
                    )
                })
                }
                {t('tripple.content.pm_tools').split('\n').map(function (item, key) {
                    return (
                        <p className="wow fadeInUp" ey={key}>
                            {item}
                        </p>
                    )
                })
                }
                {t('tripple.content.creativeProcess_title').split('\n').map(function (item, key) {
                    return (
                        <h1 className="wow fadeInUp" ey={key}>
                            {item}
                        </h1>
                    )
                })
                }
                {t('tripple.content.creativeProcess_concept_title').split('\n').map(function (item, key) {
                    return (
                        <h2 className="wow fadeInUp" ey={key}>
                            {item}
                        </h2>
                    )
                })
                }
                {t('tripple.content.creativeProcess_concept').split('\n').map(function (item, key) {
                    return (
                        <p className="wow fadeInUp" ey={key}>
                            {item}
                        </p>
                    )
                })
                }
                {t('tripple.content.creativeProcess_aesthetic_title').split('\n').map(function (item, key) {
                    return (
                        <h1 className="wow fadeInUp" ey={key}>
                            {item}
                        </h1>
                    )
                })
                }
                {t('tripple.content.creativeProcess_aesthetic_theme_title').split('\n').map(function (item, key) {
                    return (
                        <h3 className="wow fadeInUp" ey={key}>
                            {item}
                        </h3>
                    )
                })
                }
                {t('tripple.content.creativeProcess_aesthetic_theme').split('\n').map(function (item, key) {
                    return (
                        <p className="wow fadeInUp" ey={key}>
                            {item}
                        </p>
                    )
                })
                }
                {t('tripple.content.creativeProcess_aesthetic_color_title').split('\n').map(function (item, key) {
                    return (
                        <h3 className="wow fadeInUp" ey={key}>
                            {item}
                        </h3>
                    )
                })
                }
                {t('tripple.content.creativeProcess_aesthetic_color').split('\n').map(function (item, key) {
                    return (
                        <p className="wow fadeInUp" ey={key}>
                            {item}
                        </p>
                    )
                })
                }
                <img src={require('../images/tripple_color.png')} />
                {t('tripple.content.creativeProcess_aesthetic_styleguide_title').split('\n').map(function (item, key) {
                    return (
                        <h3 className="wow fadeInUp" ey={key}>
                            {item}
                        </h3>
                    )
                })
                }
                {t('tripple.content.creativeProcess_aesthetic_styleguide').split('\n').map(function (item, key) {
                    return (
                        <p className="wow fadeInUp" ey={key}>
                            {item}
                        </p>
                    )
                })
                }
                {t('tripple.content.creativeProcess_aesthetic_styleguide_link').split('\n').map(function (item, key) {
                    return (
                        <a target="_blank" href={StyleGuide}>{item}</a>
                    )
                })
                }
                {t('tripple.content.creativeProcess_aesthetic_graphic_title').split('\n').map(function (item, key) {
                    return (
                        <h3 className="wow fadeInUp c-margin-top" ey={key}>
                            {item}
                        </h3>
                    )
                })
                }
                {t('tripple.content.creativeProcess_aesthetic_graphic_1').split('\n').map(function (item, key) {
                    return (
                        <p className="wow fadeInUp" ey={key}>
                            {item}
                        </p>
                    )
                })
                }
                <div className="c-flex">
                    <video width="100%" height="100%"
                        loop autoPlay muted
                        src={require('../images/tripple_graphic1.mp4')} title="tripple graphic 1"></video>
                    <video width="100%" height="100%"
                        loop autoPlay muted
                        src={require('../images/tripple_graphic2.mp4')} title="tripple graphic 2"></video>
                </div>
                {t('tripple.content.creativeProcess_aesthetic_graphic_2').split('\n').map(function (item, key) {
                    return (
                        <p className="wow fadeInUp" ey={key}>
                            {item}
                        </p>
                    )
                })
                }
                {t('tripple.content.experience_title').split('\n').map(function (item, key) {
                    return (
                        <h1 className="wow fadeInUp" ey={key}>
                            {item}
                        </h1>
                    )
                })
                }
                {t('tripple.content.experience_uxresearch_title').split('\n').map(function (item, key) {
                    return (
                        <h2 className="wow fadeInUp" ey={key}>
                            {item}
                        </h2>
                    )
                })
                }
                {t('tripple.content.experience_uxresearch').split('\n').map(function (item, key) {
                    return (
                        <p className="wow fadeInUp" ey={key}>
                            {item}
                        </p>
                    )
                })
                }
                <img src={require('../images/tripple_persona.png')} />
                {t('tripple.content.experience_testing_title').split('\n').map(function (item, key) {
                    return (
                        <h2 className="wow fadeInUp" ey={key}>
                            {item}
                        </h2>
                    )
                })
                }
                {t('tripple.content.experience_testing1').split('\n').map(function (item, key) {
                    return (
                        <p className="wow fadeInUp" ey={key}>
                            {item}
                        </p>
                    )
                })
                }
                {t('tripple.content.experience_testing2').split('\n').map(function (item, key) {
                    return (
                        <p className="wow fadeInUp" ey={key}>
                            {item}
                        </p>
                    )
                })
                }
                <div className="c-flex c-flex--links">
                    {t('tripple.content.experience_uxresearch_report1').split('\n').map(function (item, key) {
                        return (
                            <a target="_blank" href={testingsReport1}>{item}</a>
                        )
                    })
                    }
                    {t('tripple.content.experience_uxresearch_report2').split('\n').map(function (item, key) {
                        return (
                            <a target="_blank" href={testingsReport2}>{item}</a>
                        )
                    })
                    }
                </div>
                {t('tripple.content.experience_storyboard_title').split('\n').map(function (item, key) {
                    return (
                        <h2 className="wow fadeInUp" ey={key}>
                            {item}
                        </h2>
                    )
                })
                }
                <img src={require('../images/tripple_storyboard.png')} />
                {t('tripple.content.experience_storyboard_link').split('\n').map(function (item, key) {
                    return (
                        <a target="_blank" href={Storyboard}>{item}</a>
                    )
                })
                }
                {t('tripple.content.tech_title').split('\n').map(function (item, key) {
                    return (
                        <h1 className="wow fadeInUp" ey={key}>
                            {item}
                        </h1>
                    )
                })
                }

                {t('tripple.content.tech_sensor_title').split('\n').map(function (item, key) {
                    return (
                        <h2 className="wow fadeInUp" ey={key}>
                            {item}
                        </h2>
                    )
                })
                }
                <div className="c-flex">
                    <img src={require('../images/tripple_pluseSensorBand.jpg')} />
                    <img src={require('../images/tripple_nano.png')} />
                </div>
                {t('tripple.content.tech_sensor').split('\n').map(function (item, key) {
                    return (
                        <p className="wow fadeInUp" ey={key}>
                            {item}
                        </p>
                    )
                })
                }
                {t('tripple.content.tech_touchdesigner_title').split('\n').map(function (item, key) {
                    return (
                        <h2 className="wow fadeInUp" ey={key}>
                            {item}
                        </h2>
                    )
                })
                }
                <img src={require('../images/tripple_flow.png')} />
                {t('tripple.content.tech_touchdesigner').split('\n').map(function (item, key) {
                    return (
                        <p className="wow fadeInUp" ey={key}>
                            {item}
                        </p>
                    )
                })
                }
                {t('tripple.content.prod_title').split('\n').map(function (item, key) {
                    return (
                        <h1 className="wow fadeInUp" ey={key}>
                            {item}
                        </h1>
                    )
                })
                }
                {t('tripple.content.prod_venue_title').split('\n').map(function (item, key) {
                    return (
                        <h2 className="wow fadeInUp" ey={key}>
                            {item}
                        </h2>
                    )
                })
                }
                {t('tripple.content.prod_venue').split('\n').map(function (item, key) {
                    return (
                        <p className="wow fadeInUp" ey={key}>
                            {item}
                        </p>
                    )
                })
                }
                {t('tripple.content.prod_marketing_title').split('\n').map(function (item, key) {
                    return (
                        <h2 className="wow fadeInUp" ey={key}>
                            {item}
                        </h2>
                    )
                })
                }
                <div className="c-flex">
                    <img src={require('../images/tripple_marketing1.png')} />
                    <img src={require('../images/tripple_marketing2.png')} />
                </div>
                {t('tripple.content.prod_website_title').split('\n').map(function (item, key) {
                    return (
                        <h2 className="wow fadeInUp" ey={key}>
                            {item}
                        </h2>
                    )
                })
                }
                <img src={require('../images/tripple_website.png')} />
                {t('tripple.content.prod_website_link').split('\n').map(function (item, key) {
                    return (
                        <a target="_blank" href="https://etherealimmersive.art"> {item}</a>
                    )
                })
                }
                {t('tripple.content.conclusion_title').split('\n').map(function (item, key) {
                    return (
                        <h1 className="wow fadeInUp" ey={key}>
                            {item}
                        </h1>
                    )
                })
                }
                {t('tripple.content.conclusion').split('\n').map(function (item, key) {
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