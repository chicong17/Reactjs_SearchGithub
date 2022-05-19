import React, { useContext } from 'react'
import UserItem from './UserItem'
import Spinner from '../layout/Spinner'
import githubContext from '../../context/github/githubContext'

const Users = () => {
  const gc = useContext(githubContext)
  const { loading, users } = gc.state
  if (loading) {
    return <Spinner />
  } else {
    return (
      <div style={userStyle}>
        {users.length
          ? users.map((user) => <UserItem key={user.id} user={user} />)
          : true}
      </div>
    )
  }
}
const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
}

export default Users
