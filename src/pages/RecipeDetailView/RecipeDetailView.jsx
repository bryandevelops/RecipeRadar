import { useLocation } from 'react-router-dom';
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
      <li key={i}>{location.state[`strMeasure${i}`]} {location.state[`strIngredient${i}`]}</li>
    )
    i++;
  }
  
  return (
    <main className='recipe-detail-view'>
      <div className='top-half'>
        <div className='meal-img-container'>
          <img src={strMealThumb} alt={strMeal} width={400}/>
        </div>
        <div className='meal-info-container'>
          <h1>{strMeal}</h1>
          <h2>{strCategory}</h2>
          <h3>{strArea}</h3>
          <ul>
            {ingredients}
          </ul>
        </div>
      </div>

      <div>
        <h1>Video</h1>
        <iframe 
          src={`https://www.youtube.com/embed/${strYoutube.split("=")[1]}`}
          width="420" height="315"
          title={strMeal}>
        </iframe>
      </div>
      
      <div>
        <h1>Instructions</h1>
        <p className='instructions'>{strInstructions}</p>
      </div>
    </main>
  );
}