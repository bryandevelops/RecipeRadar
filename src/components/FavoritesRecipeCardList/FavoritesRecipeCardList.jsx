import RecipeCard from '../RecipeCard/RecipeCard';
import './FavoritesRecipeCardList.css';

export default function FavoritesRecipeCardList ({ favorites }) {
  function favoritesLoaded() {
    return (
      <>
        <h1 className='label'>favorites</h1>
        <ul className='recipe-cards-list'>
          {favorites.map((meal, i) => {
            return <RecipeCard key={i} {...meal} />
          })}
        </ul>
      </>
    );
  }
  
  return (
    <section className="favorites-recipe-cards-container">
      {favorites.length !== 0 ? (
        favoritesLoaded()
      ) : (
        <div>
          <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5M12 5.50063C16.4998 0.825464 22 4.27416 22 9.1371C22 14 17.9806 16.5914 15.0383 18.9109C14 19.7294 13 20.5 12 20.5M12 5.50063L10.5 8.5L14 11L11 14.5L13 16.5L12 20.5" stroke="#000000d9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <h1 className='no-fav'>no favorites</h1>
        </div>
      )}
    </section>
  );
}