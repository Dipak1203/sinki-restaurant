import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <section className="navbar">
      <div className="container">
        <div className="logo">
          <NavLink to="" title="Logo">
            <img
              src="https://image.similarpng.com/very-thumbnail/2021/07/Chef-restaurant-logo-illustrations-template-on-transparent-background-PNG.png"
              alt="Restaurant Logo"
              className="img-responsive"
            />
          </NavLink>
        </div>

        <div className="menu text-right">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/categories">Categories</NavLink>
            </li>
            <li>
              <NavLink to="/foods">Foods</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>

        <div className="clearfix"></div>
      </div>
    </section>
  );
};

export default Navbar;
