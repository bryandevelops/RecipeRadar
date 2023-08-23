import { countryCodes } from '../../utils/api';
import './MealInfo.css'

export default function MealInfo ({ strMeal, strMealThumb, strCategory, strArea, ingredients }) {
  const url = `https://www.themealdb.com/images/icons/flags/big/32/${countryCodes[strArea]}.png`

  return (
    <section className='meal-info-component'>
      <div className='meal-img-container'>
        <img src={strMealThumb} alt={strMeal} />
      </div>
      <div className='meal-info-container'>
        <h1>{strMeal}</h1>
        <h2><span>Category:</span> {strCategory}</h2>
        <div className='meal-country-container'>
          <h2><span>Country:</span> {strArea}</h2>
          <img src={url} alt={strArea} />
        </div>
        <h3>Ingredients:</h3>
        <ul className='ingredients-list'>
          {ingredients}
        </ul>
      </div>
    </section>
  );
}