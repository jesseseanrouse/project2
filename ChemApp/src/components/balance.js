import React, {useState, useEffect} from 'react'
import Reactant from './balanceComponents/Reactants'
import { array } from 'prop-types'

const Balance = (props) => {
    // console.log(props)
    const [value, setValue] = useState('')
    const [equation, setEquation] = useState([''])
    
    const handleClickAdd = (e) => {
        e.preventDefault()
        const symbols = props.data.map(ele => {
        return ({symbol: ele.symbol})
        })
        // console.log(symbols)
        let array = equation
        array.push(value)
        setEquation(array)
        setValue('')
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
                {Reactants}
            </section>
        </>
    )
}

export default Balance