import React, { useState, useContext, useEffect } from 'react'
import githubContext from '../../context/github/githubContext'
import alertContext from '../../context/alert/alertContext'
import TextField from '@mui/material/TextField'
import Input from '@mui/material/Input'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete'
import Stack from '@mui/material/Stack'
import Debounced from '../../Debounce/Debounced'
const Search = () => {
  const [text, setText] = useState('')
  const [page, setPage] = useState(1)
  const gitHubContext = useContext(githubContext)
  const ac = useContext(alertContext)
  const getListUsers = async () => {
    const result = await gitHubContext.searchUsers(text, page)
  }
  useEffect(() => {
    if (text) {
      getListUsers()
    }
  }, [text])
  useEffect(() => {
    setPage(1)
  }, [text])
  useEffect(() => {
    const handleScroll = () => {
      let body = document.querySelector('body').clientHeight
      let scrollHeight = window.scrollY + window.innerHeight
      if (body <= Math.ceil(scrollHeight + 1)) {
        setPage((prev) => prev + 1)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  const onChange = (e) => {
    setText(e.target.value)
  }
  const Debounces = Debounced(onChange, 500)
  const onSubmit = (e) => {
    e.preventDefault()
    if (text === '') {
      ac.setAlert('Please Enter Something', 'info')
      return
    }
    gitHubContext.searchUsers(text)
    setText('')
  }

  return (
    <Container sx={{ textAlign: 'center' }}>
      <Stack
        spacing={5}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <form onSubmit={onSubmit}>
          <Stack spacing={5} direction="row">
            <TextField
              id="outlined-basic"
              label="Search Users"
              variant="outlined"
              onChange={Debounces}
            ></TextField>
            <Input type="submit" value="Search"></Input>
          </Stack>
        </form>
        {gitHubContext.users.length > 0 && (
          <Button
            variant="outlined"
            startIcon={<DeleteIcon />}
            onClick={gitHubContext.userClear}
          >
            Clear
          </Button>
        )}
      </Stack>
    </Container>
  )
}

export default Search
