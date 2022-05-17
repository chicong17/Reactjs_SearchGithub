import React from 'react'
import PropTypes from 'prop-types'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

const RepoItem = ({ repo }) => {
  return (
    <Card sx={{ minWidth: 500 }}>
      <CardContent>
        <Typography gutterBottom variant="h3">
          {repo.name}
        </Typography>
        <Typography variant="h5" component="div">
          {repo.url}
        </Typography>
        <Typography variant="body2">{repo.language}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Read Me</Button>
      </CardActions>
    </Card>
  )
}
RepoItem.propTypes = {
  repo: PropTypes.object.isRequired
}
export default RepoItem
