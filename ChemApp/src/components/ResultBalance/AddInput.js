import React from "react"

const AddInput = props => {
  // console.log(props)
  let compound = ""
  if (props.start === true) {
    compound = ""
  } else {
    compound = props.value
  }
  return (
    <>
      <input type="text"></input>
      <div>{compound}</div>
    </>
  )
}

export default AddInput
