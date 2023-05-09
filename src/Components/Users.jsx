import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const Users = () => {
    useState(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then (response => console.log (response.data))
    }, [])


  return (
    <div>Users</div>
  )
}

export default Users