import React from 'react'
import { useUserStore } from '../store/Users'
import { Link } from 'react-router-dom'
import ItemList from '../components/ItemList'

const UsersPage = () => {
    const {users} = useUserStore()
  return (
    <>
    <Link to="/">Home</Link>
     <div>UsersPage</div>
     {
        users?.map((item,index)=>(
            <ItemList key={index} item={item} ></ItemList>
        ))
    }
    </>
   
  )
}

export default UsersPage