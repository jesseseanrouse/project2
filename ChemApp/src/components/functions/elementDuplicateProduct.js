export default function elementDuplicate(array, setResultElements) {
  // Function for Element check
  let i = 0
  let flag = 0
  let index1 = ""
  let index2 = ""
  while (i < array.length) {
    let i2 = 0
    let count = 0
    while (i2 < array.length) {
      if (array[i].element === array[i2].element) {
        count++
        //   this is because the loop will run all the way through thus giving a lower value for i2 than for i
        if (i !== i2) {
          index1 = i2
          index2 = i
        }
      }
      i2++
    }
    if (count > 1) {
      flag = 1
    }
    i++
  }
  if (flag === 1) {
    let tempArr = array
    console.log(tempArr[index2].amountP)
    console.log(tempArr[index1].amountP)
    let tempAmount =
      parseInt(tempArr[index2].amountP) + parseInt(tempArr[index1].amountP)
    tempArr[index1] = { ...tempArr[index1], amountP: tempAmount }
    tempArr.splice(index2, 1)
    elementDuplicate(tempArr, setResultElements)
  } else {
    setResultElements(array)
  }
  return
}
