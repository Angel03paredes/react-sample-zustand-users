import React, { useEffect } from 'react'
import { useUserStore } from '../store/Users'
import { Link } from 'react-router-dom'
import ItemList from '../components/ItemList'

const HomePage = () => {
    const { getUsers, users } = useUserStore()

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <>
            <Link to="/users">Users</Link>
            <div>HomePage</div>
            {
                users?.map((item, index) => (
                    <ItemList key={index} item={item} ></ItemList>
                ))
            }
        </>
    )
}

export default HomePage