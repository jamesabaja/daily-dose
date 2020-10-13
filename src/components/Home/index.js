import React, { useEffect, useState } from "react"
import classNames from "classnames"

import styles from "./utils/home.module.scss"
import drugs from "../../../static/drugs.json"
import { getLocalStorageConfig, setLocalStorageConfig } from "./services/home"

const Home = () => {
  const [drug, setDrug] = useState({})

  useEffect(() => {
    let tempDrug = getLocalStorageConfig()
    if (!tempDrug) {
      tempDrug = drugs[Math.floor(Math.random() * drugs.length)]
      setLocalStorageConfig({ drug: tempDrug })
    }
    setDrug(tempDrug)
  }, [])

  return (
    <div className={classNames("has-text-centered", styles["home"])}>
      <h1 className="title mb-0">{drug?.name}</h1>
      <p className="is-size-4 is-italic mb-5">{drug?.class}</p>
      <p className="is-size-4 mt-4">{drug?.indication}</p>
      <div className={classNames("tags mt-5 mx-5", styles["home__tags"])}>
        {drug?.conditions?.slice(0, 5)?.map(condition => (
          <span class="tag">{condition}</span>
        ))}
      </div>
    </div>
  )
}

export default Home
