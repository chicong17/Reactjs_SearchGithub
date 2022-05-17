import React from 'react'
import RepoItem from './RepoItem'
import PropTypes from 'prop-types'

const Repos = ({ repos }) => {
  return (
    <div style={userStyle}>
      {repos.map((repo) => (
        <RepoItem repo={repo} key={repo.id} />
      ))}
    </div>
  )
}
Repos.propTypes = {
  repos: PropTypes.array.isRequired
}
const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridGap: '1rem'
}
export default Repos
