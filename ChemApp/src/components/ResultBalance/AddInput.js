import React, { useState, useEffect } from "react"

const AddInput = props => {
  // console.log(props)
  let compound = props.value
  const [value, setValue] = useState(1)
  const handleChange = e => {
    let string = e.target.value
    if (string === '') {
        string = 0
    }
    setValue(string)
    console.log(string)
    props.func()
  }
  //   Set up Result
  useEffect(() => {
    props.func()
  }, [])

  return (
    <>
      <input type="number" value={value} onChange={handleChange}></input>
      <div>{compound}</div>
    </>
  )
}

export default AddInput
