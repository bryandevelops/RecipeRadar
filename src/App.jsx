import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import RecipeDetailView from './pages/RecipeDetailView/RecipeDetailView';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';

export default function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<RecipeDetailView />} />
      </Routes>
      <Footer />
    </div>
  );
}