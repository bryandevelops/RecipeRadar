import { useRef } from 'react';
import { getMealsBySearch } from '../../utils/api';
import './SearchBar.css';

export default function SearchBar ({ setMealData }) {
  const searchInput = useRef(null);

  function handleClick(e) {
    e.preventDefault();
    const searchInputValue = searchInput.current.value
    getMealsBySearch(setMealData, searchInputValue)
  }

  return (
    <section className='search-bar-container'>
      <div className='search-bar-elements'>
        <input type='text' placeholder='Search for a meal...' ref={searchInput} 
          className='meal-input' onKeyDown={e => { if (e.key === 'Enter') handleClick(e) }}
        />
        <button className='meal-btn' onMouseDown={(e) => handleClick(e)}>
          <i className="fa-solid fa-magnifying-glass fa-xl"></i>
        </button>
      </div>
    </section>
  );
}