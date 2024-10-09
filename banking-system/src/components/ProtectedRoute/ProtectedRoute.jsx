import React from 'react'
import { isAuthenticated } from './utils/auth'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ element }) => {
    return (
        <div>
            {isAuthenticated() ? element : <Navigate to = "/" />}
        </div>
    )
}

export default ProtectedRoute