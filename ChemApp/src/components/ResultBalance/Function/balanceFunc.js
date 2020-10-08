export default function balanceFunc(value, compound, index, setFunc) {
    let coEff = parseInt(value)
    console.log(compound[index][0][0])
    let array2 = compound
    let array = array2[index][0]
    let i = 0
    while (i < array.length) {
        let tempR = coEff * array[i].amountR
        let tempP = coEff * array[i].amountP
        array[i] = {...array[i], amountR: tempR, amountP: tempP}
        i++
    }
    array2[index] = { ...array2[index], array }
    setFunc(array2)
    return 
}