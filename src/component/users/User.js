import React, { useEffect, Fragment, useContext, useState } from 'react'
import Spinner from '../layout/Spinner'
import { Link, useParams } from 'react-router-dom'
import Repos from '../repos/Repos'
import githubContext from '../../context/github/githubContext'
import Avatar from '@mui/material/Avatar'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import getDataApi from '../../services/axiosData'
import { GET_USER, GET_REPOS } from '../../context/type'
import { Box } from '@mui/material'
const User = () => {
  const context = useContext(githubContext)
  console.log(context)
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const { login } = useParams()
  console.log(context)
  const {
    name,
    avatar_url,
    blog,
    followers,
    following,
    public_repos,
    public_gists
  } = context.state.users

  const getUser = async () => {
    setLoading(true)
    const result = await getDataApi(`https://api.github.com/users/${login}`)
    console.log(result)
    setLoading(false)
    context.dispatch({
      type: GET_USER,
      payload: result.data
    })
  }

  const getRepoUser = async () => {
    setLoading(true)
    const result = await getDataApi(
      `https://api.github.com/users/${login}/repos?&page=${page}&per_page=10`
    )
    console.log(result)
    setLoading(false)
    if (page === 1) {
      context.dispatch({
        type: GET_REPOS,
        payload: result.data
      })
    } else {
      context.dispatch({
        type: GET_REPOS,
        payload: [...context.state.repos, ...result.data]
      })
    }
  }

  useEffect(() => {
    getRepoUser()
    getUser()
  }, [])

  if (context.loading) return <Spinner />

  return (
    <Fragment>
      <Container sx={{ paddingLeft: 20 }} maxWidth="100%">
        <Stack
          spacing={5}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Button variant="contained" name="back" sx={{ width: 150 }}>
            <Link to="/">Back</Link>
          </Button>

          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={10}
          >
            <Box maxWidth="100%">
              <Stack direction="column" AlignItems="center" spacing={2}>
                <Avatar src={avatar_url} alt="avatar" maxWidth="100%"></Avatar>
                <h1>{name}</h1>
                <strong>Username: {login} </strong>
                <strong>Website: </strong> {blog}
                <div>
                  <div>Followers: {followers}</div>
                  <div>Following: {following}</div>
                  <div>Public Repos: {public_repos}</div>
                  <div>Public Gists: {public_gists}</div>
                </div>
              </Stack>
            </Box>
            <Box>
              <Repos repos={context.state.repos} />
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Fragment>
  )
}

export default User
