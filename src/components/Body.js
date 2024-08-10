import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData";



const Body =() =>{

    const [ ListOfRestaurants, setListOfRestaurant ] = useState(resList);
    console.log("Rendering data...",ListOfRestaurants , resList);7


 
    return(
        <div className="body"> 
            <div className="filter">
                <button className="filter-btn" 
                onClick={()=>{
                      const  filteredList =ListOfRestaurants.filter(
                            (res) => res.info.avgRating > 4
                        );
                        setListOfRestaurant(filteredList);
                }}>
                    Top Rated Resturants</button>
            </div>
            <div className="res-container">
                        console.log("ssfg");
                   {    
                        ListOfRestaurants.map((restaurant)=> (
                        <RestaurantCard  key={restaurant.info.id} resData={restaurant}/>
                    ))}
                

                    
            </div>
                <div className="res-container">
                    {ListOfRestaurants.length > 0 ? (
                    ListOfRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                    ))
                    ) : (
                    <p>No restaurants available</p>
                    )}
                </div>
        </div>
    );
};
export default Body;





