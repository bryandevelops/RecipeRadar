import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMealsByCategory } from '../../utils/api';
import './CategoryView.css';
import CategoryRecipeCardList from '../../components/CategoryRecipeCardList/CategoryRecipeCardList';

export default function CategoryView ({setMealData}) {
  const [catMealData, setCatMealData] = useState(null);
  const { category } = useParams();

  useEffect(() => {
    getMealsByCategory(setCatMealData, category)
  }, [])

  return (
    <main className='category-view'>
      <CategoryRecipeCardList mealData={catMealData}/>
    </main>
  );
}