import { useState, useEffect } from 'react';
import { getAreas } from '../../utils/api';
import AreaCard from '../../components/AreaCard/AreaCard';
import './Areas.css';

export default function Areas (props) {
  const [areas, setAreas] = useState(null);

  useEffect(() => {
    getAreas(setAreas)
  }, [])

  function areasLoaded() {
    return (
      <>
        <h1 className='label'>countries</h1>
        <ul className='area-cards-list'>
          {areas.map((area, i) => {
            return <AreaCard key={i} {...area} />
          })}
        </ul>
      </>
    );
  }

  return (
    <main className='areas'>
      <section className="area-recipe-cards-container">
        {areas ? (
          areasLoaded()
        ) : (
          <div className='spinner-container'>
            <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
          </div>
        )}
      </section>
    </main>
  );
}