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
        <Typography gutterBottom variant="h4">
          {repo.name}
        </Typography>
        <Typography variant="h7" component="div">
          url: {repo.url}
        </Typography>
        <Typography variant="body2">Language : {repo.language}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="info">
          Read Me
        </Button>
      </CardActions>
    </Card>
  )
}
RepoItem.propTypes = {
  repo: PropTypes.object.isRequired
}
export default RepoItem
