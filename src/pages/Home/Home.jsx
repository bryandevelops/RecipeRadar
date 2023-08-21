import { useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import RecipeCardList from '../../components/RecipeCardList/RecipeCardList';
import './Home.css';

export default function Home (props) {
  const [mealData, setMealData] = useState(null);

  return (
    <main className='home'>
      <SearchBar setMealData={setMealData}/>
      <RecipeCardList mealData={mealData}/>
    </main>
  );
}