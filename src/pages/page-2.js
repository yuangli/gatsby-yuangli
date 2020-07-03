import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useTranslation } from "react-i18next"

const SecondPage = () => {
  const { t } = useTranslation()

  return (
    <div>
      <SEO title="Page two" />
      <div class="c-title__text">
        <h1>{t('eoko.title')}</h1>
        <h3>{t('eoko.position')}</h3>
        <p>{t('eoko.abstract')}</p>
        <ul>
          <li class="c-cate c-cate--eoko">{t('eoko.categories')}</li>
          <li class="c-cate c-cate--eoko">{t('eoko.categories')}</li>
          <li class="c-cate c-cate--eoko">{t('eoko.categories')}</li>
        </ul>
      </div>
      <div class="c-title__buttons">
        <a href="https://www.cloutquiz.com" class="c-cate c-cate_button c-cate_button--eoko">{t('eoko.button1')}</a>
        <a href="https://itunes.apple.com/us/app/%C3%AAoko/id1297963223"
          class="c-cate c-cate_button c-cate_button--eoko">{t('eoko.button2')}</a>
      </div>
      <Link to="/">{t('page2.link')}</Link>
      <p>{t('eoko.paragraph')}</p>
    </div>
  )
}
export default SecondPage
