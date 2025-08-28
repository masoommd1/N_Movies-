import React from 'react'

const Search = ({searchTerm,setSearchTerm}) => {
    
  return (
    <div className='search'>
        <div>
            <img src="./Search.svg" alt="" />

            <input type="text"
            placeholder='search movies here'
            value={searchTerm}
            onChange={(e)=>setSearchTerm(e.target.value) } />
        </div>
    </div>
  )
}

export default Search