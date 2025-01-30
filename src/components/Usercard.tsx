import { usercardType } from '../types/types'
import './usercard.css'

type userType = {
  user:usercardType
}

const Usercard = ({user}:userType) => {
  return (
    <div className='usercard'>
        <img src={user.picture.large} alt="" />
        <p>name: {user.name.first} {user.name.last}</p>
        
    </div>
  )
}

export default Usercard