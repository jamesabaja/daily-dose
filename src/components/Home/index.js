import React, { useEffect, useState } from "react"


import "./utils/home.scss"
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
    <main className="home">
      <h1>{drug?.name}</h1>
      <h3>{drug?.class}</h3>
      <h5>{drug?.indication}</h5>
      <div className="tags">
        {drug?.conditions?.slice(0, 5)?.map(condition => (
          <span className="tags__tag">{condition}</span>
        ))}
      </div>
    </main>
  )
}

export default Home
