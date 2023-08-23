import { useLocation } from 'react-router-dom';
import MealInfo from '../../components/MealInfo/MealInfo';
import Video from '../../components/Video/Video';
import Instructions from '../../components/Instructions/Instructions';
import './RecipeDetailView.css';

export default function RecipeDetailView (props) {
  const location = useLocation();
  const { 
    strMeal, strMealThumb, strCategory, 
    strArea, strYoutube, strInstructions
  } = location.state;

  const ingredients = [];
  let i = 1;
  while (location.state[`strIngredient${i}`]) {
    ingredients.push(
      <li className='ingredient-item' key={i}>{location.state[`strMeasure${i}`]} {location.state[`strIngredient${i}`]}</li>
    )
    i++;
  }
  
  return (
    <main className='recipe-detail-view'>
      <div className='recipe-detail-wrapper'>
        <MealInfo 
          strMeal={strMeal} 
          strMealThumb={strMealThumb}
          strCategory={strCategory}
          strArea={strArea}
          ingredients={ingredients} 
        />
        <Instructions strInstructions={strInstructions} />
        <Video strMeal={strMeal} strYoutube={strYoutube} />
      </div>
    </main>
  );
}