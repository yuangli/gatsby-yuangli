/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { withTrans } from '../i18n/withTrans'

import Header from "./header"
import "./layout.css"


const Layout = ({ children, t, i18n }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [hovered, setHovered] = React.useState(false);

  function toggleHover() {
    setHovered(!hovered);
  }

  const translatedTitle = t(`site.${data.site.siteMetadata.title}`)

  const childrenWithProps = React.Children.map(children,
    (child) => React.cloneElement(child, { toggleHover: toggleHover, hovered: hovered }));

  console.log(t(`site`))
  return (
    <>
      <Header siteTitle={translatedTitle}
        toggleHover={toggleHover}
        hovered={hovered}
      />
      <div>
        <main>
          {childrenWithProps}
        </main>
        <footer className="l-footer">
          {t(`site.Yuang Li`)} v1.0 © {new Date().getFullYear()} | {t(`site.footer`)} <a href="https://github.com/yuangli/gatsby-yuangli" target="_blank" rel="noopener norefferer">GitHub</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default withTrans(Layout)
