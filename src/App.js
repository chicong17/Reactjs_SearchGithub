import './App.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import User from './component/users/User'
import GithubState from './context/github/githubState'
import AlertState from './context/alert/alertState'
import Home from './component/page/Home'
import Navbar from './component/layout/Navbar'
import NotFound from './component/page/NotFound'
import Alert from './component/layout/Alert'
import Stack from '@mui/material/Stack'

function App() {
  return (
    <div className="App">
      <Stack spacing={3}>
        <GithubState>
          <AlertState>
            <Router>
              <Navbar></Navbar>
              <Alert />
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/user/:login" element={<User />} />
                <Route element={<NotFound />} />
              </Routes>
            </Router>
          </AlertState>
        </GithubState>
      </Stack>
    </div>
  )
}

export default App
