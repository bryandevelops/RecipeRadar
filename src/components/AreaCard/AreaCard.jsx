import { Link } from 'react-router-dom';
import { countryCodes } from '../../utils/api';
import './AreaCard.css';

export default function AreaCard ({ strArea }) {
  const url = `https://www.themealdb.com/images/icons/flags/big/64/${countryCodes[strArea]}.png`;

  return (
    <li className='area-card'>
      <Link to={`/area/${strArea}`}>
        <img src={url} alt={strArea} />
      </Link>
    </li>
  );
}