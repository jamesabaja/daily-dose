import React from "react"
import classNames from "classnames"

import "../../styles/global.scss"

const Layout = ({
  children,
  mobile,
  tablet,
  desktop,
  fullhd,
  isCentered,
  className,
}) => {
  return (
    <div
      className={classNames("columns mx-1-mobile", {
        "is-centered": isCentered,
      })}
    >
      <div
        className={`column is-${mobile || 12}-mobile is-${
          tablet || 10
        }-tablet is-${desktop || 8}-desktop is-${fullhd || 6}-fullhd  ${
          className || ""
        }`}
      >
        {children}
      </div>
    </div>
  )
}

export default Layout
