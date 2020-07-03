import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"
import { useTranslation } from "react-i18next"

import '../styles/home.scss'

const IndexPage = () => {
  // const { t } = useTranslation()

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
          <a href="mailto: yl956@drexel.edu" target="_blank"
            className="animsition-link c-cate c-cate_button c-cate_button--contactme">{t('home.contactme')}</a>
          <a href="/resume_yuangli.pdf" target="_blank"
            className="animsition-link c-cate c-cate_button c-cate_button--resume">{t('home.resume')}</a>
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

      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      </div>
      <div className="Cards">
        <div className="CardGroup">
          {/* <Card
            name={t('gs1.name')}
            title={t('gs1.title')}
            text={t('gs1.abstract')}
            logo={require('../images/gs1-logo.png')}
            cover={require('../images/gs1-cover.png')} /> */}
          <Card
            name={t('eoko.name')}
            title={t('eoko.title')}
            text={t('eoko.abstract')}
            logo={require('../images/eoko-logo.png')}
            cover={require('../images/eoko_mock_up.jpg')} />
          {/* <Card
            name={t('tripple.name')}
            title={t('tripple.title')}
            text={t('tripple.abstract')}
            logo={require('../images/tripple-logo.png')}
            cover={require('../images/tripple-cover.png')} />
          <Card
            name={t('busbuddy.name')}
            title={t('busbuddy.title')}
            text={t('busbuddy.abstract')}
            logo={require('../images/busbuddy-logo.png')}
            cover={require('../images/busbuddy-cover.png')} /> */}
          <Card
            name={t('schmearit.name')}
            title={t('schmearit.title')}
            text={t('schmearit.abstract')}
            logo={require('../images/schmearit-logo.jpg')}
            cover={require('../images/schmearit-cover.jpg')} />
          <Card
            name={t('schmearit.name')}
            title={t('schmearit.title')}
            text={t('schmearit.abstract')}
            logo={require('../images/schmearit-logo.jpg')}
            cover={require('../images/schmearit-cover.jpg')} />
          <Card
            name={t('schmearit.name')}
            title={t('schmearit.title')}
            text={t('schmearit.abstract')}
            logo={require('../images/schmearit-logo.jpg')}
            cover={require('../images/schmearit-cover.jpg')} />
          <Card
            name={t('schmearit.name')}
            title={t('schmearit.title')}
            text={t('schmearit.abstract')}
            logo={require('../images/schmearit-logo.jpg')}
            cover={require('../images/schmearit-cover.jpg')} />
        </div>
      </div>


    </div>
  )
}

export default IndexPage
