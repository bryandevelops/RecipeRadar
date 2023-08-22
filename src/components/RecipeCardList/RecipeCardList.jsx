import RecipeCard from '../RecipeCard/RecipeCard';
import PhotoCarousel from '../PhotoCarousel/PhotoCarousel';
import './RecipeCardList.css';

export default function RecipeCardList ({ mealData }) {
  function mealDataLoaded() {
    return (
      <ul className='recipe-cards-list'>
        {mealData.map((meal, i) => {
          return <RecipeCard key={i} {...meal}/>
        })}
      </ul>
    );
  }

  return (
    <section className="recipe-cards-container">
      {mealData ? mealDataLoaded() : <PhotoCarousel />}
    </section>
  );
}