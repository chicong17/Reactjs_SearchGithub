import React from 'react'
import Container from '@mui/material/Container'
import GitHubIcon from '@mui/icons-material/GitHub'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Toolbar from '@mui/material/Toolbar'

const Navbar = () => {
  return (
    <Container sx={{ textAlign: 'center' }}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <GitHubIcon sx={{ width: 30, height: 30, textAlign: 'center' }} />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Github Search
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </Container>
  )
}

export default Navbar
