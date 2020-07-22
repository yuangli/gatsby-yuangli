import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useTranslation } from "react-i18next"

import '../styles/post.scss'

const EokoPage = () => {
    const { t } = useTranslation()

    return (
        <div className="l-post">
            <SEO title="eoko" />
            <div className="c-title">
                <div className="c-title__feature-img">
                    <img src={require('../images/eoko_logo.png')} />
                </div>
                <div className="c-title__text">
                    <h1 className="c-h1__eoko">{t('eoko.title')}</h1>
                    <h3 className="c-h3">{t('eoko.position')}</h3>
                    <p>{t('eoko.abstract')}</p>
                    <ul>
                        {/* <li className="c-cate c-cate--eoko">{t('eoko.categories')}</li>
                        <li className="c-cate c-cate--eoko">{t('eoko.categories')}</li>
                        <li className="c-cate c-cate--eoko">{t('eoko.categories')}</li> */}
                        {t('eoko.categories').map(function (item, key) {
                            return (
                                <li className="c-cate c-cate--eoko">
                                    {item}
                                </li>
                            )
                        })
                        }
                    </ul>
                    <div className="c-title__buttons">
                        <a href="https://www.cloutquiz.com" className="c-cate c-cate_button c-cate_button--eoko">{t('eoko.button1')}</a>
                        <a href="https://itunes.apple.com/us/app/%C3%AAoko/id1297963223"
                            className="c-cate c-cate_button c-cate_button--eoko">{t('eoko.button2')}</a>
                    </div>
                </div>
            </div>
            <div className="l-decription">
                <img src={require('../images/eoko_cover.jpg')} className="c-title-image wow fadeInUp" ></img>
                {t('eoko.content.process_title').split('\n').map(function (item, key) {
                    return (
                        <h1 className="wow fadeInUp" ey={key}>
                            {item}
                        </h1>
                    )
                })
                }
                {t('eoko.content.process').split('\n').map(function (item, key) {
                    return (
                        <p className="wow fadeInUp" ey={key}>
                            {item}
                        </p>
                    )
                })
                }
                {t('eoko.content.implementation_title').split('\n').map(function (item, key) {
                    return (
                        <h1 className="wow fadeInUp" ey={key}>
                            {item}
                        </h1>
                    )
                })
                }
                {t('eoko.content.implementation').split('\n').map(function (item, key) {
                    return (
                        <p className="wow fadeInUp" ey={key}>
                            {item}
                        </p>
                    )
                })
                }
                <img src={require('../images/eoko_old_design.png')} />
                {t('eoko.content.deliverable_title').split('\n').map(function (item, key) {
                    return (
                        <h1 className="wow fadeInUp" ey={key}>
                            {item}
                        </h1>
                    )
                })
                }
                <div class="l-content c-feature">
                    <img className="c-feature__1-image" src={require('../images/eoko_homebase.png')} />
                    <div class="c-feature__1-text wow fadeInUp">
                        <h3 class="c-feature--step wow fadeInUp">1</h3>
                        {t('eoko.content.deliverable1_title').split('\n').map(function (item, key) {
                            return (
                                <h3 className="wow fadeInUp" ey={key}>
                                    {item}
                                </h3>
                            )
                        })
                        }
                        {t('eoko.content.deliverable1_description').split('\n').map(function (item, key) {
                            return (
                                <p className="wow fadeInUp" ey={key}>
                                    {item}
                                </p>
                            )
                        })
                        }
                    </div>
                    <img className="c-feature__2-image" src={require('../images/eoko_homebase.png')} />
                    <div class="c-feature__2-text wow fadeInUp">
                        <h3 class="c-feature--step wow fadeInUp">2</h3>
                        {t('eoko.content.deliverable2_title').split('\n').map(function (item, key) {
                            return (
                                <h3 className="wow fadeInUp" ey={key}>
                                    {item}
                                </h3>
                            )
                        })
                        }
                        {t('eoko.content.deliverable2_description').split('\n').map(function (item, key) {
                            return (
                                <p className="wow fadeInUp" ey={key}>
                                    {item}
                                </p>
                            )
                        })
                        }
                    </div>
                    <img className="c-feature__3-image" src={require('../images/eoko_homebase.png')} />
                    <div class="c-feature__3-text wow fadeInUp">
                        <h3 class="c-feature--step wow fadeInUp">3</h3>
                        {t('eoko.content.deliverable3_title').split('\n').map(function (item, key) {
                            return (
                                <h3 className="wow fadeInUp" ey={key}>
                                    {item}
                                </h3>
                            )
                        })
                        }
                        {t('eoko.content.deliverable3_description').split('\n').map(function (item, key) {
                            return (
                                <p className="wow fadeInUp" ey={key}>
                                    {item}
                                </p>
                            )
                        })
                        }
                    </div>
                    <img className="c-feature__4-image" src={require('../images/eoko_homebase.png')} />
                    <div class="c-feature__4-text wow fadeInUp">
                        <h3 class="c-feature--step wow fadeInUp">4</h3>
                        {t('eoko.content.deliverable4_title').split('\n').map(function (item, key) {
                            return (
                                <h3 className="wow fadeInUp" ey={key}>
                                    {item}
                                </h3>
                            )
                        })
                        }
                        {t('eoko.content.deliverable4_description').split('\n').map(function (item, key) {
                            return (
                                <p className="wow fadeInUp" ey={key}>
                                    {item}
                                </p>
                            )
                        })
                        }
                    </div>
                </div>
                {t('eoko.content.result_title').split('\n').map(function (item, key) {
                    return (
                        <h1 className="wow fadeInUp" ey={key}>
                            {item}
                        </h1>
                    )
                })
                }
                <div class="c-flex c-flex--eokoMeetings">
                    <img src={require('../images/eoko_recphilly_meeting.jpeg')} />
                    <img src={require('../images/eoko_flyers_meeting.jpeg')} />
                </div>
                {t('eoko.content.result').split('\n').map(function (item, key) {
                    return (
                        <p className="wow fadeInUp" ey={key}>
                            {item}
                        </p>
                    )
                })
                }
            </div>
            {/* <Link to="/">{t('page2.link')}</Link> */}
            {/* <p>{t('eoko.paragraph')}</p> */}
        </div>
    )
}
export default EokoPage