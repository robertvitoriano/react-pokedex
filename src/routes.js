import PokemonsList from './pages/PokemonsList';
import PokemonDetails from './pages/PokemonDetails';



const pokemonsList = {
  path:'/',
  component:PokemonsList,
  header:false
}
const pokemonDetails = {
  path:'/categories',
  component:PokemonDetails,
  header:true
}

const userRoutes = [pokemonsList, pokemonDetails]



export {
  userRoutes
}