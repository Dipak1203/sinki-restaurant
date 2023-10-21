import Navbar from "./components/Navbar"
import './App.css'
import FoodSearch from "./components/FoodSearch"
import ExploreFood from "./components/ExploreFood"
import FoodMenu from "./components/FoodMenu"
import { SocialMedia } from "./components/SocialMedia"
import Footer from "./components/Footer"
const App = () => {
  return (
    <div>
      <Navbar />
      <FoodSearch />
      <ExploreFood />
      <FoodMenu />
      <SocialMedia />
      <Footer />
    </div>
  )
}

export default App