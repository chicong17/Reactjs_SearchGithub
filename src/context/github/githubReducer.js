import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_REPOS,
  GET_USER
} from '../type'

const reducer = (state, action) => {
  console.log(state)
  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    case CLEAR_USERS:
      return {
        ...state,
        loading: false,
        users: []
      }
    case GET_USER:
      return {
        ...state,
        users: action.payload
      }
    case GET_REPOS:
      return {
        ...state,
        repos: action.payload,
        loading: false
      }
    default:
      return state
  }
}

export default reducer
