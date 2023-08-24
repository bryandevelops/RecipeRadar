import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMealsByArea } from '../../utils/api';
import AreaRecipeCardList from '../../components/AreaRecipeCardList/AreaRecipeCardList';
import './AreaView.css';

export default function AreaView (props) {
  const [areaMealData, setAreaMealData] = useState(null);
  const { area } = useParams();

  useEffect(() => {
    getMealsByArea(setAreaMealData, area)
  }, [])

  return (
    <main className='area-view'>
      <AreaRecipeCardList mealData={areaMealData} />
    </main>
  );
}