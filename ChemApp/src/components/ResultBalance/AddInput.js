import React from "react"

const AddInput = props => {
  // console.log(props)
  let compound = ""

  compound = props.value

  return (
    <>
      <input type="text"></input>
      <div>{compound}</div>
    </>
  )
}

export default AddInput
