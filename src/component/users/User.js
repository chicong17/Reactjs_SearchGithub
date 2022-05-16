import React, { useEffect, Fragment, useContext } from 'react'
import Spinner from '../layout/Spinner'
import { Link, useParams } from 'react-router-dom'
import Repos from '../repos/Repos'
import githubContext from '../../context/github/githubContext'
import Avatar from '@mui/material/Avatar'
import Container from '@mui/material/Container'
const User = () => {
  const context = useContext(githubContext)

  const { login } = useParams()

  console.log(context)
  const {
    name,
    avatar_url,
    bio,
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
        <Link to="/" className="btn btn-light">
          Back To Search
        </Link>

        <div className="card grid-2">
          <div className="all-center">
            <Avatar src={avatar_url} alt="avatar"></Avatar>
            <img
              src={avatar_url}
              alt="avatar"
              className="round-img"
              style={{ width: '150px' }}
            />
            <h1>{name}</h1>
          </div>
          <div>
            {bio && (
              <Fragment>
                <h3>Bio</h3>
                <p>{bio}</p>
              </Fragment>
            )}

            <ul>
              <li>
                {login && (
                  <Fragment>
                    <strong>Username: </strong> {login}
                  </Fragment>
                )}
              </li>

              <li>
                {blog && (
                  <Fragment>
                    <strong>Website: </strong> {blog}
                  </Fragment>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className="card text-center">
          <div className="badge badge-primary">Followers: {followers}</div>
          <div className="badge badge-success">Following: {following}</div>
          <div className="badge badge-light">Public Repos: {public_repos}</div>
          <div className="badge badge-dark">Public Gists: {public_gists}</div>
        </div>

        <Repos repos={context.repos} />
      </Container>
    </Fragment>
  )
}

export default User
