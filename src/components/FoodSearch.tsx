const FoodSearch = () => {
  return (
    <section className="food-search text-center">
      <div className="container">
        <form>
          <input
            type="search"
            name="search"
            placeholder="Search for Food.."
            required
          />
          <input
            type="submit"
            name="submit"
            value="Search"
            className="btn ml-3 w-32 hover:cursor-pointer bg-[#ff4757] text-white"
          />
        </form>
      </div>
    </section>
  );
};

export default FoodSearch;
