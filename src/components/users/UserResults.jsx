import { useEffect, useContext } from 'react'
import Spinner from '../layout/Spinner'
import UserItem from './UserItem'
import GithubContext from '../../context/github/githubContext'

function UserResults() {
  const { users, loading, fetchUsers } = useContext(GithubContext)

  //пустой массив зависимостей - отработает один раз
  useEffect(() => {
    fetchUsers()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!loading) {
    return (
      <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
        {users.map((user) => {
          return <UserItem key={user.id} user={user} />
        })}
      </div>
    )
  } else {
    return <Spinner />
  }
}

export default UserResults
