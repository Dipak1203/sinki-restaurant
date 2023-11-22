import React, { useState } from "react";
import { imgData } from "../data/Data";

type Search = {
  product: string;
};

const FoodSearch: React.FC = () => {
  const [data, setData] = useState(imgData);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const searchTerm = formData.get("search") as string;

    // console.log(searchTerm)

    const filteredData = imgData.filter(
      (item) => item.category.toLowerCase() === searchTerm.toLowerCase()
    );

    console.log(filteredData);

    // setData(filteredData);
  };

  return (
    <section className="food-search text-center">
      <div className="container">
        <form onSubmit={onSubmit}>
          <input
            type="search"
            name="search"
            placeholder="Search for Food.."
            required
          />
          <input
            type="submit"
            value="Search"
            className="btn ml-3 w-32 hover:cursor-pointer bg-[#ff4757] text-white"
          />
        </form>
      </div>
    </section>
  );
};

export default FoodSearch;
