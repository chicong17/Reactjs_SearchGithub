import React, { useEffect, Fragment, useContext } from 'react'
import Spinner from '../layout/Spinner'
import { Link, useParams } from 'react-router-dom'
import Repos from '../repos/Repos'
import githubContext from '../../context/github/githubContext'
import Avatar from '@mui/material/Avatar'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

const User = () => {
  const context = useContext(githubContext)

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
  } = context.users

  const getRepoUser = async () => {
    const result = await context.getRepos(login)
    console.log(result)
  }
  const getUsers = async () => {
    const result = await context.getUser(login)
    console.log(result)
  }
  useEffect(() => {
    getRepoUser()
    getUsers()
  }, [])

  if (context.loading) return <Spinner />

  return (
    <Fragment>
      <Container sx={{ textAlign: 'center' }}>
        <Stack spacing={5}>
          <Button variant="contained" color="white" sx={{ width: 150 }}>
            <Link to="/">Back To Search</Link>
          </Button>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={5}
          >
            <Avatar
              src={avatar_url}
              alt="avatar"
              sx={{ width: 150, height: 150 }}
            ></Avatar>

            <h1>{name}</h1>
            {login && (
              <Fragment>
                <strong>Username: </strong> {login}
              </Fragment>
            )}
            {blog && (
              <Fragment>
                <strong>Website: </strong> {blog}
              </Fragment>
            )}
            <div>
              <div>Followers: {followers}</div>
              <div>Following: {following}</div>
              <div>Public Repos: {public_repos}</div>
              <div>Public Gists: {public_gists}</div>
            </div>

            <Repos repos={context.repos} />
          </Stack>
        </Stack>
      </Container>
    </Fragment>
  )
}

export default User
