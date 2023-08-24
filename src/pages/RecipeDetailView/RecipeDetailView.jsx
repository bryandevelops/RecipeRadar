import { useLocation } from 'react-router-dom';
import MealInfo from '../../components/MealInfo/MealInfo';
import Video from '../../components/Video/Video';
import Instructions from '../../components/Instructions/Instructions';
import './RecipeDetailView.css';

export default function RecipeDetailView ({ favorites, setFavorites }) {
  const location = useLocation();
  
  return (
    <main className='recipe-detail-view'>
      <div className='recipe-detail-wrapper'>
        <MealInfo favorites={favorites} setFavorites={setFavorites} {...location.state} />
        <Instructions strInstructions={location.state.strInstructions} />
        <Video strMeal={location.state.strMeal} strYoutube={location.state.strYoutube} />
      </div>
    </main>
  );
}