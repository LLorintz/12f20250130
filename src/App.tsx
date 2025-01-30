import Usercard from './components/Usercard'
import './App.css'
import { useEffect, useState } from 'react'
import { usercardType } from './types/types'
import { fetchUsers } from './api/api'

function App() {
 
  const [users,setUsers] = useState<usercardType[]>()



  useEffect(() => {
    const getUsers = async () => {
      const fetchedUsers = await fetchUsers();
      setUsers(fetchedUsers);
    };
    getUsers();
  }, []);

  return (
    <div className='container'>
      <div className='user-card-grid'>
        
        {users && users.map(User=>(
          <Usercard user={User}></Usercard>
        ))}
      </div>
    </div>
  )
}

export default App
