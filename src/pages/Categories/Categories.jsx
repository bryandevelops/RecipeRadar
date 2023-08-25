import { useState, useEffect } from 'react';
import { getCategories } from '../../utils/api';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import './Categories.css';

export default function Categories (props) {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    getCategories(setCategories)
  }, [])

  function categoriesLoaded() {
    return (
      <>
        <h1 className='label'>categories</h1>
        <ul className='category-cards-list'>
          {categories.map((cat, i) => {
            return <CategoryCard key={i} {...cat} />
          })}
        </ul>
      </>
    );
  }

  return (
    <main className='categories'>
      <section className="category-recipe-cards-container">
        {categories ? (
          categoriesLoaded()
        ) : (
          <div className='spinner-container'>
            <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
          </div>
        )}
      </section>
    </main>
  );
}