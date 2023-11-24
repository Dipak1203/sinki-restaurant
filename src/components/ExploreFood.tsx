import React, { useState } from "react";
import { imgData } from "../data/Data";

type ImgDataType = {
  id: number;
  imgUrl: string;
  category: string;
  title: string;
};

const ExploreFood = () => {
  const [originalData] = useState<ImgDataType[]>(imgData);
  const [filteredData, setFilteredData] = useState<ImgDataType[]>(originalData);
  const [input, setInput] = useState('');

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const filterData = originalData.filter((value) => {
      return value.category === input;
    });

    setFilteredData(filterData);
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setInput(inputValue);

    if (!inputValue) {
      setFilteredData(originalData);
    }
  };

  return (
    <section className="categories">
      <section className="food-search text-center">
        <div className="container">
          <form onSubmit={onSubmit}>
            <input
              type="search"
              name="search"
              value={input}
              onChange={onInputChange}
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
      <div className="container">
        <h2 className="text-center">Explore Foods</h2>

        {filteredData.map(({ id, title, imgUrl }) => (
          <a href="category-foods.html" key={id}>
            <div className="box-3 float-container">
              <img
                src={imgUrl}
                alt={title}
                className="img-responsive img-curve"
              />
              <h3 className="float-text text-white">{title}</h3>
            </div>
          </a>
        ))}

        <div className="clearfix"></div>
      </div>
      <div className="explore_button">
        <button>Explore More</button>
      </div>
    </section>
  );
};

export default ExploreFood;
