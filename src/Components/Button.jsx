import React from 'react'

const Button = ({text, onClickFun}) => {
  return (
    <>
        <button onClick={onClickFun}>{text}</button>
    </>
  )
}

export default Button