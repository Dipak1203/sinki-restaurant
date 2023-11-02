

const ExploreFood = () => {
  return (
    <section className="categories">
      <div className="container">
        <h2 className="text-center">Explore Foods</h2>

        <a href="category-foods.html">
          <div className="box-3 float-container">
            <img
              src="https://media-cdn.tripadvisor.com/media/photo-s/15/2d/23/07/domino-s-pizza.jpg"
              alt="Pizza"
              className="img-responsive img-curve"
            />

            <h3 className="float-text text-white">Pizza</h3>
          </div>
        </a>

        <a href="#">
          <div className="box-3 float-container">
            <img
              src="https://natashaskitchen.com/wp-content/uploads/2023/06/Cheeseburger.jpg"
              alt="Burger"
              className="img-responsive img-curve"
            />

            <h3 className="float-text text-white">Burger</h3>
          </div>
        </a>

        <a href="#">
          <div className="box-3 float-container">
            <img
              src="https://junifoods.com/wp-content/uploads/2023/07/Momo-chicken-khukura-recipe-500x500.png"
              alt="Momo"
              className="img-responsive img-curve"
            />

            <h3 className="float-text text-white">Momo</h3>
          </div>
        </a>
        <div className="clearfix"></div>
      </div>
      <div className="explore_button">
          <button>Explore More</button>
        </div>
    </section>
  );
};

export default ExploreFood;
