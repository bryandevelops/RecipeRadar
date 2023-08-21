import RecipeCard from '../RecipeCard/RecipeCard';
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

  function loading() {
    return (
      <h3>loading...</h3>
    );
  }

  return (
    <section className="recipe-cards-container">
      {mealData ? mealDataLoaded() : loading()}
    </section>
  );
}