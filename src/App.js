import { useEffect, useState } from 'react';
import './App.css';
import RecipeCard from './components/RecipeCard/RecipeCard';


function App() {

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');

  const getData = async () => {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${process.env.REACT_APP_RECIPE_ID}&app_key=${process.env.REACT_APP_RECIPE_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  }

  useEffect(() => {
    getData();
  }, [query])

  function handleChangeSearch(e) {
    setSearch(e.target.value)
  }

  // for prevent sending to much request with any changes in seacrh state
  function handleGetSearch(e) {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <section className='container recipe-container'>
      <div className='row'>
      <header className='header'>
            <div className='header-title-logo'>
               <h2>Recipe App</h2>
               <img src="./images/food-icon.png" alt="food icon recipe green" />
            </div>
            <div className='search-box'>
               <form onSubmit={handleGetSearch}>
                 <input value={search} onChange={handleChangeSearch} className='search-box-input' type="text" placeholder='Search your recipe...' />
                 <button type='submit' className='search-box-btn'>Search</button>
               </form>
            </div>
        </header>
      </div>
        <main className="row custom-main">
        {recipes && recipes.map(recipe => (
          <RecipeCard
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          img={recipe.recipe.image}
          calories={recipe.recipe.calories}
          ingredients={recipe.recipe.ingredients} />
        ))
        }
        </main>
    </section>
  );
}

export default App;
