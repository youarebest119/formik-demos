import React from 'react'

const ErrorMessage = ({ children }) => {
    return (
        <div className="error_message">
            {children}
        </div>
    )
}

export default ErrorMessage
