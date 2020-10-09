import React, { useState, useEffect } from "react"

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
    props.func(value, props.compound, props.index, props.setFunction)
    props.setFlag(true)
  }
  //   Set up Result
  useEffect(() => {
    props.func(value, props.compound, props.index, props.setFunction)
  }, [])

  return (
    <div className="Results">
      <input type="number" value={value} onChange={handleChange}></input>
      <div>{compound}</div>
    </div>
  )
}

export default AddInput
