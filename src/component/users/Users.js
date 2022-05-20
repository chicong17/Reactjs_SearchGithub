import React, { useContext } from 'react'
import UserItem from './UserItem'
import Spinner from '../layout/Spinner'
import githubContext from '../../context/github/githubContext'
import Grid from '@mui/material/Grid'
import { experimentalStyled as styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'

const Users = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }))
  const gc = useContext(githubContext)
  const { loading, users } = gc.state
  if (loading) {
    return <Spinner />
  } else {
    return (
      <Grid container spacing={{ sm: 1, md: 1, lg: 1 }}>
        {users.length
          ? users.map((user) => (
              <Grid item xs={12} md={6} lg={4}>
                <Item>
                  <UserItem key={user.id} user={user} />
                </Item>
              </Grid>
            ))
          : true}
      </Grid>
    )
  }
}

export default Users
