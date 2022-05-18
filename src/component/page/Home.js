import React from 'react'
import Users from '../users/Users'
import Search from '../users/Search'
import Stack from '@mui/material/Stack'

const Home = () => {
  return (
    <>
      <Stack
        direction="column"
        spacing={5}
        justifyContent="center"
        alignItems="center"
      >
        <Search></Search>
        <Users></Users>
      </Stack>
    </>
  )
}

export default Home
