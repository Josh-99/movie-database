import { React, useState } from "react";
// import { useMediaQuery } from "react-responsive";
import { useIsBelowSmallOnly } from "../../Hooks/MediaQueries";

const Categories = () => {
  const [categories, setCategories] = useState([
    "Popular",
    "Now Playing",
    "Latest",
    "Top Rated",
    "Upcoming"
  ]);

  const isBelowSmall = useIsBelowSmallOnly();

  if (isBelowSmall) {
    return (
      <form className="flex justify-center mt-4 mb-4 bg-black">
        <select className="w-2/4 text-center text-title">
          {categories.map((category) => {
            return <option key={category}>{category}</option>;
          })}
        </select>
      </form>
    );
  }

  if (!isBelowSmall) {
    return (
      <div className="flex justify-center bg-black">
        {categories.map((category) => {
          return (
            <p
              className="text-title
        md:text-display-sm p-4 text-ongreen"
            >
              {category}
            </p>
          );
        })}
      </div>
    );
  }
};

export default Categories;
