import Navbar from "./components/Navbar"
import './App.css'
import FoodSearch from "./components/FoodSearch"
import ExploreFood from "./components/ExploreFood"
import FoodMenu from "./components/FoodMenu"
const App = () => {
  return (
    <div>
      <Navbar />
      <FoodSearch />
      <ExploreFood />
      <FoodMenu />
    </div>
  )
}

export default App