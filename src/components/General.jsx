import React from 'react'

const General = (props) => {
  return (
    <div>
      <h1 className={props.className}>{props.heading}</h1>
      <p>{props.para}</p>
    </div>
  )
}

export default General
