import { Link } from 'react-router-dom';
import './RecipeCard.css';

export default function RecipeCard (props) {
  return (
    <li className='recipe-card'>
      <Link to={`/${props.idMeal}`} state={{...props}}>
        <h1>{props.strMeal}</h1>
        <img src={`${props.strMealThumb}`}/>
      </Link>
    </li>
  );
}