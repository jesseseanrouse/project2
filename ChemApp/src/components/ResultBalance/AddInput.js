import React, { useState } from "react"

const AddInput = props => {
  //   console.log(props)
  let compound = props.value
  const [value, setValue] = useState(1)
  const handleChange = e => {
    let string = e.target.value
    if (string === "") {
      string = 0
    }
    setValue(string)
  }
  

  return (
    <div className="Results">
      <input type="number" value={value} onChange={handleChange}></input>
      <div>{compound}</div>
    </div>
  )
}

export default AddInput
