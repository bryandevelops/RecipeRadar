import { Link } from 'react-router-dom';
import './CategoryCard.css';

export default function CategoryCard ({ strCategory, strCategoryThumb }) {
  return (
    <li className='category-card'>
      <Link to={`/category/${strCategory}`}>
        <h1>{strCategory}</h1>
        <img src={`${strCategoryThumb}`}/>
      </Link>
    </li>
  );
}