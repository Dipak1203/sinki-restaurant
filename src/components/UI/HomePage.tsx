import ExploreFood from "../ExploreFood";
import FoodMenu from "../FoodMenu";
import FoodSearch from "../FoodSearch";

const HomePage = () => {
  return (
    <div>
      <FoodSearch />
      <ExploreFood />
      <FoodMenu />
    </div>
  );
};

export default HomePage;
