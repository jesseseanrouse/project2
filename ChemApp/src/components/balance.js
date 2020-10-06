import React, {useState, useEffect} from 'react'
import Reactant from './balanceComponents/Reactants'
import { array } from 'prop-types'
// Import Arrays with letters/numbers/()
import NumbersArr from './balanceComponents/NumbersArray'
import UpperArr from './balanceComponents/UpperArr'
import LowerArr from './balanceComponents/LowerArr'
import ParArr from './balanceComponents/ParArr'

const Balance = (props) => {
    // console.log(props)
    const [value, setValue] = useState('')
    const [equation, setEquation] = useState([''])
    const [errorMessage, setErrorMessage] = useState('')
    
    const handleClickAdd = (e) => {
        // To prevent any shenanigans 
        e.preventDefault()
        // To get a list of symbols to verify that entered values are elements
        const symbols = props.data.map(ele => {
        return ({symbol: ele.symbol})
        })
        // Sets error to ""
        setErrorMessage('')
        // console.log(symbols)
        // Now for the fun part
        let i = 0
        while (i < value.length) {
            console.log('Loop ' + i)
            let step = 1
            // First Check is numbers why is explained after the check
            if (NumbersArr.some(number => number === value.charAt(i))) {
                console.log('Checked Number')
                // Cannot start with a number, the point is to balance
                if (i === 0) {
                    setErrorMessage('Can not start with a number')
                    break;
                }
            // Check for UpperCase which is the start of an element
            } else if (UpperArr.some(letter => letter === value.charAt(i))) {
                console.log('Checked UpperCase' + value.charAt(i))
                let symbolCheck = false
                let element = ''
                // checks the next letter to see if it is LowerCase
                if (value.charAt(i + 1) === value.charAt(i+1).toLowerCase) {
                    symbolCheck = true
                    console.log(
                      "Checked LowerCase under UpperCase" + value.charAt(i + 1)
                    )
                }
                // Establish Element
                if (symbolCheck = true) {
                    element = value.charAt(i) + value.charAt(i + 1)
                    step = 2
                    console.log('Element has two letters')
                } else {
                    element = value.charAt(i)
                    console.log('Element has one letter')
                }
                // Now to check if it is even an element
                if (symbols.some(symbol => symbol.symbol === element)) {
                    console.log('checking if element is valid')
                    let array = equation
                    array.push(element)
                    setEquation(array)
                    setValue("")
                } else {
                    setErrorMessage('You did not enter a valid element')
                    break;
                }
            }
            i = i + step
        }
    }
    const handleChange = (e) => {
        const string = e.target.value
        setValue(string)
    }
    const Reactants = equation.map((ele, index) => {
        return (
            <Reactant name={ele} key={index}/>
        )
    })
    return (
        <>
            <section>
                <form>
                    <input type='text' placeholder='Compound' value={value} onChange={handleChange}/>
                    <button onClick={handleClickAdd}>Reactant</button>
                    <button>Product</button>
                    <button>Done</button>
                    <button>Reset</button>
                </form>
                <div>{errorMessage}</div>
                {Reactants}
            </section>
        </>
    )
}

export default Balance