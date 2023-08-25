import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMealsByLetter } from '../../utils/api';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import './Alphabet.css';

export default function Alphabet (props) {
  const [letterMealData, setLetterMealData] = useState(null);
  const { letter } = useParams();

  useEffect(() => {
    getMealsByLetter(setLetterMealData, letter)
  }, [letter])

  function mealDataLoaded() {
    return (
      <>
        <h1 className='label'>{letter}</h1>
        <ul className='recipe-cards-list'>
          {letterMealData.map((meal, i) => {
            return <RecipeCard key={i} {...meal} />
          })}
        </ul>
      </>
    );
  }

  return (
    <main className='alphabet-view'>
      <section className="alphabet-recipe-cards-container">
        {letterMealData ? (
          mealDataLoaded()
        ) : (
          <div className='spinner-container'>
            <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
          </div>
        )}
      </section>
    </main>
  );
}