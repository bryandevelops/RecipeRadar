import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import RecipeDetailView from './pages/RecipeDetailView/RecipeDetailView';
import Favorites from './pages/Favorites/Favorites';
import Categories from './pages/Categories/Categories';
import CategoryView from './pages/CategoryView/CategoryView';
import Areas from './pages/Areas/Areas';
import AreaView from './pages/AreaView/AreaView';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';

export default function App() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites && savedFavorites !== 'undefined' && savedFavorites !== 'null') setFavorites(JSON.parse(savedFavorites))
  }, [])

  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<RecipeDetailView favorites={favorites} setFavorites={setFavorites} />} />
        <Route path='/favorites' element={<Favorites favorites={favorites} />} />
        <Route path='/category' element={<Categories />} />
        <Route path='/category/:category' element={<CategoryView />} />
        <Route path='/area' element={<Areas />} />
        <Route path='/area/:area' element={<AreaView />} />
      </Routes>
      <Footer />
    </div>
  );
}