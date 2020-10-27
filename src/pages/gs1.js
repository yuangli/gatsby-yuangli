import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useTranslation } from "react-i18next"
import DesignReport1 from '../assets/Activate_screens_updates_and_improvment_idea.pdf';
import DesignReport2 from '../assets/Activate_screens_updates_and_improvment_idea_2.pdf';
import Report from '../assets/Assessment_of_Systems_and_Solutions.pdf';
import ResolverDesign from '../assets/resolverDesign.png';
import ActivateDesign from '../assets/activateDesign.png';


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
                        <a target="_blank" href="https://www.gs1.org/standards/gs1-resolver-service" className="c-cate c-cate_button c-cate_button--gs1">{t('gs1.button1')}</a>
                        <a target="_blank" href="https://www.gs1.org/services/activate/support"
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
                <img className="c-feature__4-image" src={require('../images/gs1_resolver_typeface.png')} />
                <img className="c-feature__4-image" src={require('../images/gs1_resolver_components.png')} />
                <div className="c-flex c-flex--links">
                    {t('gs1.content.highlights_resolver_link1').split('\n').map(function (item, key) {
                        return (
                            <a target="_blank" href={ResolverDesign}>{item}</a>
                        )
                    })
                    }
                    {t('gs1.content.highlights_resolver_link2').split('\n').map(function (item, key) {
                        return (
                            <a target="_blank" href={"https://github.com/yuangli/resolver-app"}>{item}</a >
                        )
                    })
                    }
                    {t('gs1.content.highlights_resolver_link3').split('\n').map(function (item, key) {
                        return (
                            <a target="_blank" href={"https://github.com/yuangli/global-scanner"}>{item}</a >
                        )
                    })
                    }
                </div>
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
                <div className="c-flex c-flex--links">
                    {t('gs1.content.highlights_activate_link1').split('\n').map(function (item, key) {
                        return (
                            <a target="_blank" href={ActivateDesign}>{item}</a>
                        )
                    })
                    }
                    {t('gs1.content.highlights_activate_link2').split('\n').map(function (item, key) {
                        return (
                            <a target="_blank" href={DesignReport1}>{item}</a >
                        )
                    })
                    }
                    {t('gs1.content.highlights_activate_link3').split('\n').map(function (item, key) {
                        return (
                            <a target="_blank" href={DesignReport2}>{item}</a >
                        )
                    })
                    }
                </div>
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
                {t('gs1.content.highlights_ba_link').split('\n').map(function (item, key) {
                    return (
                        <a target="_blank" href={Report}>{item}</a>
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