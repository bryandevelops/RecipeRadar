import { useParams } from 'react-router';
import RecipeCard from '../RecipeCard/RecipeCard';
import './CategoryRecipeCardList.css';
import '../../utils/spinner.css';

export default function CategoryRecipeCardList ({ mealData }) {
  const { category } = useParams();

  function mealDataLoaded() {
    return (
      <>
        <h1 className='label'>{category.toLowerCase()}</h1>
        <ul className='recipe-cards-list'>
          {mealData.map((meal, i) => {
            return <RecipeCard key={i} {...meal}/>
          })}
        </ul>
      </>
    );
  }
  
  return (
    <section className="category-recipe-cards-container">
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