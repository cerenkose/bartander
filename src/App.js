import './App.css';

import Coctail from './components/Coctail';
import { useEffect, useState } from 'react';
import Pagination from './components/Pagination';

const MAX_LIST_ITEM_COUNT = 12;

const FETCH_OPTIONS = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '88cd11691dmsh3c18f53fb542dbap116388jsna8ce15a6cf34',
    'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
  }
};

function App() {
  const [ drinks, setDrinks ] = useState([])
  const [ pagination, setPagination ] = useState(1)

  const start = (MAX_LIST_ITEM_COUNT * pagination) - MAX_LIST_ITEM_COUNT
  const end = MAX_LIST_ITEM_COUNT * pagination

  useEffect(() => {
    fetch("https://the-cocktail-db.p.rapidapi.com/filter.php?c=Cocktail", FETCH_OPTIONS)
    .then(response => response.json())
    .then(response => setDrinks(response.drinks))
    .catch(err => console.error(err));
  }, [])  

  return (
    <div className="container App">
      <div className='row align-items-start'>
      {drinks.slice(start, end).map((drink, index) => (
        <Coctail key={index} image={drink.strDrinkThumb} name={drink.strDrink} />
      ))}
      </div>

      <Pagination setPagination={setPagination} pagination={pagination} />
    </div>
  );
}

export default App;
