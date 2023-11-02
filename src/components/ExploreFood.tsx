import { useEffect, useState } from "react";
import { imgData } from "../data/Data";

type ImgDataType = {
  id: number;
  imgUrl: string;
  category: string;
  title: string;
};
const ExploreFood = () => {
  const [data, setData] = useState<ImgDataType[]>([]);

  const filterData: ImgDataType[] = imgData.filter((data) => {
    return data.category === "explore";
  });

  console.log(data, " img data");
  useEffect(() => {
    setData(filterData);
  }, []);
  return (
    <section className="categories">
      <div className="container">
        <h2 className="text-center">Explore Foods</h2>

        {data.map(({ id, title, category, imgUrl }) => {
          return (
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
          );
        })}
       
        <div className="clearfix"></div>
      </div>
      <div className="explore_button">
        <button>Explore More</button>
      </div>
    </section>
  );
};

export default ExploreFood;
