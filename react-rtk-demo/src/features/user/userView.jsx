import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers } from './userSlice'

function UserView() {
  const user = useSelector( state => state.user )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  return (
    <div>
        <h2>List of users:</h2>
        {
          user.loading && <p>Loading...</p>
        }

        {
          !user.loading && user.error ? <p>Error: {user.error}</p> : null 
        }

        {
          !user.loading && user.users ? 
            user.users.map((user, index) => {
              return(
                <p key={index}>{user.name}</p>
              )
              })
            :
            null
        }
    </div>
  )
}

export default UserView