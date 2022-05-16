import React from 'react'
import Container from '@mui/material/Container'
import GitHubIcon from '@mui/icons-material/GitHub'

const Navbar = () => {
  return (
    <Container sx={{ textAlign: 'center' }}>
      <GitHubIcon sx={{ width: 30, height: 30, textAlign: 'center' }} />
    </Container>
  )
}

export default Navbar
