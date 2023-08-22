import RecipeCard from '../RecipeCard/RecipeCard';
import PhotoCarousel from '../Carousel/PhotoCarousel';
import './RecipeCardList.css';

export default function RecipeCardList ({ mealData }) {
  function mealDataLoaded() {
    return (
      <ul>
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