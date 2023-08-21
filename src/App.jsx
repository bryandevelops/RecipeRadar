import { useState, useEffect } from 'react';
import { getRandomMeal } from './utils/api';
import './App.css'

export default function App() {
  const [state, setState] = useState(null);

  useEffect(() => {
    getRandomMeal(setState)
  }, [])

  function loaded() {
    return (
      <>
        <h1>{state.meals[0].strMeal}</h1>
        <h2>{state.meals[0].strCategory}</h2>
        <p>{state.meals[0].strInstructions}</p>
        <img src={state.meals[0].strMealThumb}/>
      </>
    )
  }

  function loading() {
    return <h1>Loading...</h1>
  }

  return (
    <>
      {state ? loaded() : loading()}
    </>
  )
}