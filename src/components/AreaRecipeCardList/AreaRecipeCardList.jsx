import { useParams } from 'react-router';
import RecipeCard from '../RecipeCard/RecipeCard';
import '../../utils/spinner.css';
import './AreaRecipeCardList.css';

export default function AreaRecipeCardList ({ mealData }) {
  const { area } = useParams();

  function mealDataLoaded() {
    return (
      <>
        <h1 className='label'>{area.toLowerCase()}</h1>
        <ul className='recipe-cards-list'>
          {mealData.map((meal, i) => {
            return <RecipeCard key={i} {...meal}/>
          })}
        </ul>
      </>
    );
  }
  
  return (
    <section className="area-recipe-cards-container">
      {mealData ? (
        mealDataLoaded()
      ) : (
        <div className='spinner-container'>
          <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
      )}
    </section>
  );
}