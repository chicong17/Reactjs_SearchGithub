import React from 'react'
import PropTypes from 'prop-types'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import rehypeRaw from 'rehype-raw'
import { useState } from 'react'
import getDataApi from '../../services/axiosData'
import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router-dom'

const RepoItem = ({ repo }) => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
  }
  const [open, setOpen] = useState(false)
  const [DataReadme, setDataReadme] = useState('')
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const { login } = useParams()
  const handleModal = async () => {
    setOpen(true)
    await getDataApi(
      `https://api.github.com/repos/${login}/${repo.name}/contents/README.md`
    )
      .then((response) =>
        setDataReadme(
          decodeURIComponent(escape(window.atob(response.data.content)))
        )
      )
      .catch((err) =>
        setDataReadme('There is no README.md file in this repository')
      )
  }
  return (
    <Card sx={{ minWidth: 500 }}>
      <CardContent>
        <Stack spacing={2}>
          <Typography gutterBottom variant="h4">
            {repo.name}
          </Typography>
          <Typography variant="h7" component="div">
            url: {repo.url}
          </Typography>
          <Typography variant="body2">
            Open-issues : {repo.open_issues}
          </Typography>
          <Typography variant="body2">Fork : {repo.forks}</Typography>
          <Typography variant="body2">Watches : {repo.watchers}</Typography>
          <Typography variant="body2">Language : {repo.language}</Typography>
        </Stack>
      </CardContent>
      <CardActions>
        <Button size="small" color="info" onClick={handleModal}>
          Read Me
        </Button>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500
          }}
          width="100%"
        >
          <Fade in={open}>
            <Box sx={style} width="100%">
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                README content
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                  {DataReadme}
                </ReactMarkdown>
              </Typography>
            </Box>
          </Fade>
        </Modal>
      </CardActions>
    </Card>
  )
}
RepoItem.propTypes = {
  repo: PropTypes.object.isRequired
}
export default RepoItem
