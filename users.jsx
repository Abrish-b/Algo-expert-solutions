import React from 'react'

const Users = ({users}) => {

    users.sort((a,b) => {
        if(a.lastName < b.lastName) return -1
        if(a.lastName < b.lastName) return 1
        return 0;
    })
  return (
    <div>
    <div className="user-count text-white">Users: {users.length}</div>
        {users.length > 0 ? <ul className="">
          {users.map((x,i) => <li className="text-white"key={i}>{x.firstName} {x.lastName}</li>) } 
        </ul>: ''}
    </div>
  )
}

export default Users