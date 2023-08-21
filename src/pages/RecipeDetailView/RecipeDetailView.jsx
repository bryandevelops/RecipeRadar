import { useLocation } from 'react-router-dom';
import './RecipeDetailView.css';

export default function RecipeDetailView (props) {
  const location = useLocation();
  const { strMeal } = location.state;
  console.log(location)
  return (
    <main className='recipe-detail-view'>
      <h1>{strMeal}</h1>
    </main>
  );
}