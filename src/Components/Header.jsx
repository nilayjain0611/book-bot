import React, { useState } from 'react';
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify } from 'react-icons/bs';

function Header({ OpenSidebar, data, setData }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    // Filter the data based on the search query
    const filteredData = data.filter(item => 
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    const handleChange = (event) => {
      setSearchQuery(event.target.value);
      handleSearch(event.target.value); // Call the handleSearch function from props
    };
    // Update the state with filtered data
    setData(filteredData);
  };
 
  return (
    <header className='header'>
      <div className='header-left'>
        <div className="search-wrapper">
          <input 
            type="text" 
            placeholder="Search" 
            value={searchQuery} 
            onChange={handleSearch} 
          />
          <BsSearch className='icon' />
        </div>
      </div>
      <div className='header-right'>
        <BsFillBellFill className='icon' />
        <BsFillEnvelopeFill className='icon' />
        <a href='/'><BsPersonCircle className='icon' /></a>
      </div>
    </header>
  );
}

export default Header;
