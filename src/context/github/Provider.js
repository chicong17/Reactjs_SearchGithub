import githubContext from './githubContext'
import { useReducer } from 'react'
import githubReducer from './githubReducer'

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(githubReducer, {
    users: [],
    user: {},
    repos: [],
    loading: false
  })
  const value = {
    state,
    dispatch
  }
  return (
    <githubContext.Provider value={value}>{children}</githubContext.Provider>
  )
}
export default Provider
