import { React, useState } from "react";
import { useMediaQuery } from "react-responsive";
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
    return <div>Mobile</div>;
  }

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
};

export default Categories;
