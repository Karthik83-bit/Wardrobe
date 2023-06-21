import React from 'react'
import { Link } from 'react-router-dom'

function AdminPage() {
  return (
    <div>
        <Link to="/add "><h1>AddProducts</h1></Link>
        <Link to="/edit"><h1>Edit or Delete Products</h1></Link>

    </div>
  )
}

export default AdminPage