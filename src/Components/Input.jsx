import React from 'react'

const Input = ({placeholder, data, setData}) => {
  return (
    <>
        <input type="text" placeholder={placeholder} value={data} onChange={(e) => setData(e.target.value)}  />
    </>
  )
}

export default Input