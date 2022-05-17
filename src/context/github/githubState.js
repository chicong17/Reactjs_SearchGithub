import { useReducer } from 'react'
import axios from 'axios'
import githubContext from './githubContext'
import githubReducer from './githubReducer'
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_REPOS,
  GET_USER
} from '../type'

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false
  }

  const [state, dispatch] = useReducer(githubReducer, initialState)
  const searchUsers = async (text, page) => {
    setLoading()
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&page=${page}`
    )
    if (page === 1) {
      dispatch({
        type: SEARCH_USERS,
        payload: res.data.items
      })
    } else {
      dispatch({
        type: SEARCH_USERS,
        payload: [...res.data.items]
      })
    }
  }
  const getUser = async (userName) => {
    setLoading()
    const res = await axios.get(`https://api.github.com/users/${userName}`)
    dispatch({
      type: GET_USER,
      payload: res.data
    })
  }
  const getRepos = async (login) => {
    setLoading()
    const res = await axios.get(`https://api.github.com/users/${login}/repos`)
    console.log(res.data)
    dispatch({
      type: GET_REPOS,
      payload: res.data
    })
  }
  const setLoading = () => dispatch({ type: SET_LOADING })
  const userClear = () => dispatch({ type: CLEAR_USERS })

  return (
    <githubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        userClear,
        getUser,
        getRepos,
        dispatch
      }}
    >
      {props.children}
    </githubContext.Provider>
  )
}

export default GithubState
