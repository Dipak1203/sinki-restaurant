
const Navbar = () => {
  return (
    <section className="navbar">
      <div className="container">
        <div className="logo">
          <a href="#" title="Logo">
            <img
              src="https://image.similarpng.com/very-thumbnail/2021/07/Chef-restaurant-logo-illustrations-template-on-transparent-background-PNG.png"
              alt="Restaurant Logo"
              className="img-responsive"
            />
          </a>
        </div>

        <div className="menu text-right">
          <ul>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="categories.html">Categories</a>
            </li>
            <li>
              <a href="foods.html">Foods</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        <div className="clearfix"></div>
      </div>
    </section>
  );
};

export default Navbar;
