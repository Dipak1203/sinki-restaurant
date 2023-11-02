import ExploreFood from "../ExploreFood";
import FoodMenu from "../FoodMenu";
import FoodSearch from "../FoodSearch";
import { SocialMedia } from "../SocialMedia";

const HomePage = () => {
  return (
    <div>
      <FoodSearch />
      <ExploreFood />
      <FoodMenu />
      <SocialMedia />
    </div>
  );
};

export default HomePage;
