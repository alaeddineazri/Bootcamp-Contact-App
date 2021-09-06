import React from 'react'

const Filter = ({filtration}) => {
    return (
        <div>
            <input type="text" placeholder="serch" onChange={(e)=>filtration(e.target.value)} />
        </div>
    )
}

export default Filter
