import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu.js";


const RestaurantMenu = () => {
 

  const {resId} = useParams();
  const resInfo = useRestaurentMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, avgRating } =
    resInfo?.cards?.[2]?.card?.card?.info || {};

  const itemCards =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card
      ?.card?.itemCards || [];

  console.log("itemCards:", itemCards);

  return (
    <div className="menu">
      <h1>{name || "Restaurant Name"}</h1>
      <h3>{cuisines?.join(",") || "Cuisines"}</h3>
      <h3>{costForTwoMessage || "Cost for Two"}</h3>
      <h3>{avgRating || "Average Rating"}</h3>
      <h2>Menu</h2>
      <ul>
        {itemCards.length > 0 ? (
          itemCards.map((item, index) => (
            <li key={item?.card?.info?.id || index}>
              {item?.card?.info?.name || "Unknown Item"} - {"  Rs."}{
                item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100
              }
            </li>
          ))
        ) : (
          <li>No menu items found</li>
        )}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
