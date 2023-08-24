import FavoritesRecipeCardList from '../../components/FavoritesRecipeCardList/FavoritesRecipeCardList';
import './Favorites.css';

export default function Favorites ({ favorites }) {
  return (
    <main className='favorites'>
      <FavoritesRecipeCardList favorites={favorites} />
    </main>
  );
}