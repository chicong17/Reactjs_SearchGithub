import './App.css'
import './Reset.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import User from './component/users/User'
import AlertState from './context/alert/alertState'
import Home from './component/page/Home'
import Navbar from './component/layout/Navbar'
import NotFound from './component/page/NotFound'
import Alert from './component/layout/Alert'
import Stack from '@mui/material/Stack'
import Provider from './context/github/Provider'

function App() {
  return (
    <div className="App">
      <Stack spacing={3}>
        <Provider>
          <AlertState>
            <Router>
              <Navbar></Navbar>
              <Alert />
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/user/:login" element={<User />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Router>
          </AlertState>
        </Provider>
      </Stack>
    </div>
  )
}

export default App
