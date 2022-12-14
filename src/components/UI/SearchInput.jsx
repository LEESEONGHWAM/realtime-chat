import React from 'react'

import '../../styles/components/UI/SearchInput.css'

const SearchInput = ({value, onChange}) => {
    return <input value={value} placeholder="User Search.." onChange={onChange} className="searchInput" type="text" />
}

export default SearchInput