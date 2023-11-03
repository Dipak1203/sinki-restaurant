const Footer = () => {
  return (
    <section className="footer mt-3">
      <div className="container">
        <p className="mt-2">
          <strong>ADDRESS</strong>: Koteshwor-32, Mahadesthan, Kathmandu
        </p>
        <p className="mt-2">
          <strong>CONTACT</strong>: +9779766916005
        </p>
        <p className="mt-2">
          <strong>EMAIL</strong>: mailsinki@sinkrestaurant.com
        </p>
        <div className="flex gap-2 mt-3">
          <img src="https://img.icons8.com/fluent/50/000000/facebook-new.png" />
          <img src="https://img.icons8.com/fluent/48/000000/instagram-new.png" />
          <img src="https://img.icons8.com/fluent/48/000000/twitter.png" />
        </div>
      </div>
      <div className="container text-center">
        <p>
          All rights reserved. Designed By <a href="#">DIPAK KUMAL</a>
        </p>
      </div>
    </section>
  );
};

export default Footer;
