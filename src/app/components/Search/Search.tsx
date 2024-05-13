import React from 'react';
import './Search.scss'

interface SearchProps {
  placeholder?: string;
  searchIcon?: any;
  searchPsWithOutIcon?: string;
  onChange?: any;
}

const Search: React.FC<SearchProps> = ({
  placeholder,
  searchIcon,
  searchPsWithOutIcon,
  onChange,
}) => {
  return (
    <div className='searchBox'>
        <i className={`${searchIcon}`}></i>
        <input type="text" className={`form-control rounded-24 ${searchPsWithOutIcon}`} placeholder={placeholder} onChange={onChange} />
    </div>
  )
}

export default Search