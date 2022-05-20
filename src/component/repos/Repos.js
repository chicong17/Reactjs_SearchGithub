import React from 'react'
import RepoItem from './RepoItem'
import PropTypes from 'prop-types'
import Grid from '@mui/material/Grid'
import { experimentalStyled as styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'

const Repos = ({ repos }) => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }))
  return (
    <Grid>
      {repos &&
        repos.map((repo) => (
          <Grid item xs={12} md={12} lg={6}>
            <Item>
              <RepoItem repo={repo} key={repo.id} />
            </Item>
          </Grid>
        ))}
    </Grid>
  )
}
Repos.propTypes = {
  repos: PropTypes.array.isRequired
}

export default Repos
