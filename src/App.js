import './App.css';
import Header from './components/Header/Header';
import RecipeCard from './components/RecipeCard/RecipeCard';


function App() {
  return (
    <section className='container recipe-container'>
      <div className='row'>
        <Header />
      </div>
      <div className='row'>
        <RecipeCard />
      </div>
    </section>
  );
}

export default App;
