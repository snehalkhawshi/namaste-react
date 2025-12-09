import RestaurantCard from "./RestaurentCard";
import restaurentData from "../utils/mockData";
import { useState } from "react";

const Body = () => {
    // local state variable - super powerful variable
    const [ listOfRestaurents , setListOfRestaurents ] = useState(restaurentData);

	return (
		<div className="body">
			<div className="filter">
                <button 
                    className="filter-btn" 
                    onClick = {() => {
                        const filteredList = listOfRestaurents.filter((res) => res.card.card.info.avgRating > 4);
                        setListOfRestaurents(filteredList);
                    }}
                >
                    Top rated restaurent
                </button>
            </div>

			<div className="restaurent-container">
				{ listOfRestaurents.map((restaurant) => <RestaurantCard key = {restaurant.card.card.info.id} restaurentData = {restaurant}/>) }
			</div>
		</div>
	);
};

export default Body;