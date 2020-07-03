import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useTranslation } from "react-i18next"

import '../styles/post.scss'

const EokoPage = () => {
    const { t } = useTranslation()

    return (
        <div>
            <SEO title="Page two" />
            <div className="c-title">
                <div className="c-title__feature-img">
                    {/* <img src="../images/eoko-logo.png" /> */}
                    <img src="../images/eoko-logo.png" />
                </div>
                <div className="c-title__text">
                    <h1 className="c-h1__eoko">{t('eoko.title')}</h1>
                    <h3 className="c-h3">{t('eoko.position')}</h3>
                    <p>{t('eoko.abstract')}</p>
                    <ul>
                        <li className="c-cate c-cate--eoko">{t('eoko.categories')}</li>
                        <li className="c-cate c-cate--eoko">{t('eoko.categories')}</li>
                        <li className="c-cate c-cate--eoko">{t('eoko.categories')}</li>
                    </ul>
                </div>
                <div className="c-title__buttons">
                    <a href="https://www.cloutquiz.com" className="c-cate c-cate_button c-cate_button--eoko">{t('eoko.button1')}</a>
                    <a href="https://itunes.apple.com/us/app/%C3%AAoko/id1297963223"
                        className="c-cate c-cate_button c-cate_button--eoko">{t('eoko.button2')}</a>
                </div>
                {/* <Link to="/">{t('page2.link')}</Link> */}
                {/* <p>{t('eoko.paragraph')}</p> */}
            </div>
        </div >
    )
}
export default EokoPage