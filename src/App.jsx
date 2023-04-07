import { Navigate,Routes,Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import NavBar from './components/NavBar'
import Recipes from './components/Recipes'
import RecipesHome from './components/RecipesHome'
import RecipeList from './components/RecipeList';

function App() {
  return (
    <>
    <div>
    <NavBar />
    
    <div>
      
      <Routes>
        <Route path="/" element={<Navigate to ='/recipes' />} />
        <Route path = '/recipes' element={<Recipes />} > {/* these are nested routes // this is the parent route and we need an outlet in parent component to outlet */}
          <Route index element={<RecipesHome />} />
              <Route path='/recipes/:food' element={<RecipeList />} />
              
        </ Route>
      </Routes>

    </div>
    <img src="/images/dietz-bg.jpeg" alt="" className='hero'/>
    </div>
    
    </>
  )
}

export default App