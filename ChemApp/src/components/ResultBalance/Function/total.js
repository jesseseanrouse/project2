import { func } from "prop-types";


export default function total (setEleList, eleReact, eleProduct) {
    let i =0
    let array = []
    while (i < eleReact[0][0].length) {
        array.push(eleReact[0][0][i])
        i++
    }
    i = 0
    while (i < eleProduct[0][0].length) {
        array.push(eleProduct[0][0][i])
        i++
    }
    setEleList(array)
    return
}