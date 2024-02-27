import React from 'react'
import { Button } from 'react-bootstrap'

const CommonBtn = ({ disabled, onClick, type, text, className, fluid }) => {
  return (
    <>
      <Button
        onClick={onClick}
        type={type || 'button'}
        className={`common_btn ${className} ${fluid ? "w-100" : ''}`}
        disabled={disabled}
      >
        {text}
      </Button>
    </>
  )
}

export default CommonBtn
