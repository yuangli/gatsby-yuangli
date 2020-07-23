import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"
import { useTranslation } from "react-i18next"

import '../styles/home.scss'

const IndexPage = (props) => {
  const { t } = useTranslation();

  return (
    <div className="d">
      <SEO title="Home" />

      <div className="c-intro">
        <div>
          <p className="c-intro__p">{t('home.iam')}</p>
          <h1 className="c-intro__h1">{t('home.name')}</h1>
        </div>
        <div>
          <p className="c-intro__p">{t('home.iama')}</p>
          <h2 className="c-intro__h2">{t('home.title')}</h2>
        </div>
        <div>
          <p className="c-intro__p">{t('home.mymissionis')}</p>
          <h3 className="c-intro__h3">{t('home.mission')}</h3>
        </div>
        <div>
          <a href="mailto: yuang@yuangli.com" target="_blank"
            className="animsition-link c-cate c-cate_button c-cate_button--contactme">{t('home.contactme')}</a>
          <a href={t('home.resume')} target="_blank"
            className="animsition-link c-cate c-cate_button c-cate_button--resume">{t('home.resume_title')}</a>
        </div>
      </div>

      {/* {t('home.content').split('\n').map(function (item, key) {
        return (
          <p key={key}>
            {item}
          </p>
        )
      })
      } */}
      <div className="Cards">
        <div className="CardGroup">
          <Card
            hovered={props.hovered}
            toggleHover={props.toggleHover}
            viewmore={t('home.viewmore')}
            id={t('tripple.id')}
            name={t('tripple.name')}
            category={t('tripple.categories')}
            title={t('tripple.title')}
            text={t('tripple.abstract')}
            logo={require('../images/tripple_logo.png')}
            cover={require('../images/tripple_cover.png')} />
          <Card
            hovered={props.hovered}
            toggleHover={props.toggleHover}
            viewmore={t('home.viewmore')}
            id={t('gs1.id')}
            name={t('gs1.name')}
            category={t('gs1.categories')}
            title={t('gs1.title')}
            text={t('gs1.abstract')}
            logo={require('../images/gs1_logo.png')}
            cover={require('../images/gs1_cover.png')} />
          <Card
            hovered={props.hovered}
            toggleHover={props.toggleHover}
            viewmore={t('home.viewmore')}
            id={t('eoko.id')}
            name={t('eoko.name')}
            category={t('eoko.categories')}
            title={t('eoko.title')}
            text={t('eoko.abstract')}
            logo={require('../images/eoko_logo.png')}
            cover={require('../images/eoko_cover.jpg')} />
          <Card
            hovered={props.hovered}
            toggleHover={props.toggleHover}
            viewmore={t('home.viewmore')}
            id={t('busbuddy.id')}
            name={t('busbuddy.name')}
            category={t('busbuddy.categories')}
            title={t('busbuddy.title')}
            text={t('busbuddy.abstract')}
            logo={require('../images/busbuddy_logo.png')}
            cover={require('../images/busbuddy_cover.png')} />
          <Card
            hovered={props.hovered}
            toggleHover={props.toggleHover}
            viewmore={t('home.viewmore')}
            id={t('schmearit.id')}
            name={t('schmearit.name')}
            category={t('schmearit.categories')}
            title={t('schmearit.title')}
            text={t('schmearit.abstract')}
            logo={require('../images/schmearit_logo.png')}
            cover={require('../images/schmearit_cover.png')} />
        </div>
      </div>


    </div >
  )
}

export default IndexPage