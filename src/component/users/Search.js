import React, { useState, useContext } from 'react'
import githubContext from '../../context/github/githubContext'
import alertContext from '../../context/alert/alertContext'
import TextField from '@mui/material/TextField'
import Input from '@mui/material/Input'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete'

const Search = () => {
  const [text, setText] = useState('')

  const gc = useContext(githubContext)
  const ac = useContext(alertContext)

  const onChange = (e) => {
    setText(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (text === '') {
      ac.setAlert('Please Enter Something', 'info')
      return
    }
    gc.searchUsers(text)
    setText('')
  }

  return (
    <Container>
      <div>
        <form onSubmit={onSubmit}>
          <div className="form">
            <TextField
              id="outlined-basic"
              label="Search Users"
              variant="outlined"
              onChange={onChange}
              value={text}
            ></TextField>
            <Input type="submit"></Input>
          </div>
        </form>
        {gc.users.length > 0 && (
          <Button
            variant="outlined"
            startIcon={<DeleteIcon />}
            onClick={gc.userClear}
          >
            Clear
          </Button>
        )}
      </div>
    </Container>
  )
}

export default Search
