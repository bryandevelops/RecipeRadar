import { useRef } from 'react';
import { getMealsBySearch } from '../../utils/api';
import './SearchBar.css';

export default function SearchBar ({ setMealData }) {
  const searchInput = useRef(null);

  function handleClick() {
    const searchInputValue = searchInput.current.value
    getMealsBySearch(setMealData, searchInputValue)
  }

  return (
    <section className='search-bar-container'>
      <input type='text' placeholder='Search for a meal...' ref={searchInput} 
        className='meal-input' onKeyDown={e => { if (e.key === 'Enter') handleClick() }}
      />
      {/* <button onClick={handleClick}>Search</button> */}
    </section>
  );
}