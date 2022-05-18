import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <Container sx={{ textAlign: 'center' }}>
      <Box
        sx={{
          width: 300,
          height: 300,
          borderRadius: '10 solid',
          backgroundColor: '#64778e',
          '&:hover': {
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.8, 0.7]
          }
        }}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        padding={1}
        spacing={5}
      >
        <Stack spacing={5} direction="column">
          <Avatar src={avatar_url} sx={{ width: 100, height: 100 }} />
          <h3>{login}</h3>
          <Button
            variant="outlined"
            sx={{ color: 'white', backgroundColor: 'white', lineStyle: 'none' }}
          >
            <Link to={`user/${login}`}>More</Link>
          </Button>
        </Stack>
      </Box>
    </Container>
  )
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired
}
export default UserItem
