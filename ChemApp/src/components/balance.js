import React, {useState} from 'react'

const Balance = (props) => {
    // console.log(props)
    const [value, setValue] = useState('')
    const handleClickAdd = () => {}
    return (
        <>
            <section>
                <input type='text' placeholder='Compound' value={value}/>
                <button onClick={handleClickAdd}>Add</button>
                <button>Yields</button>
                <button>Done</button>
            </section>
        </>
    )
}

export default Balance