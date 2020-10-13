const isBrowser = () => typeof window !== "undefined"

export const getLocalStorageConfig = () => {
  if (isBrowser()) {
    return JSON.parse(window.localStorage.getItem("drug"))
  }
  return null
}

export const setLocalStorageConfig = ({ drug }) => {
  if (isBrowser()) {
    return window.localStorage.setItem("drug", JSON.stringify(drug))
  }
  return null
}
