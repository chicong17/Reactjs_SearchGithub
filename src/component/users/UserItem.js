import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <Container sx={{ textAlign: 'center' }}>
      <Box
        sx={{
          width: 300,
          height: 300,

          backgroundColor: 'primary.dark',
          '&:hover': {
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.8, 0.7]
          }
        }}
      >
        <Avatar src={avatar_url} />
        <h3>{login}</h3>
        <div>
          <Link to={`user/${login}`} className="btn btn-dark btn-sm my-1">
            More
          </Link>
        </div>
      </Box>
    </Container>
  )
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired
}
export default UserItem
