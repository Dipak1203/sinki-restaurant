import Navbar from "./components/Navbar"
import './App.css'
import FoodSearch from "./components/FoodSearch"
import ExploreFood from "./components/ExploreFood"
const App = () => {
  return (
    <div>
      <Navbar />
      <FoodSearch />
      <ExploreFood />
    </div>
  )
}

export default App