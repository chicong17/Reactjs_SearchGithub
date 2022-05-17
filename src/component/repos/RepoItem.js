import React from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'

const RepoItem = ({ repo }) => {
  return (
    <Stack direction="column" spacing={2}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
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
    </Stack>
  )
}
RepoItem.propTypes = {
  repo: PropTypes.object.isRequired
}
export default RepoItem
