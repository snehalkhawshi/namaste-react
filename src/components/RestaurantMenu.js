import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurentMenu";
import RestaurentCategories from "./RestaurentCategories";

const RestaurantMenu = () => {

    // get from body component on specific restaurant id
    const {resId} = useParams();

   // custom hook for fetching restaurant data
    const resInfo = useRestaurantMenu(resId);

    const [showIndex , setShowIndex] = useState(null);
    
    const dummy = "Dummy Data";

    if (resInfo === null) return <Shimmer />;

    const { name, rating, costForTwo, cuisines, menu , menuCategories} = resInfo.info;


    return (
        <div className="text-center p-4">
            <h1 className="font-bold my-6 text-xl">{name} - {rating}⭐</h1>
            <p className=" text-lg">{cuisines.join(", ")}</p>
            {/* <h3>Cost for two: ₹{costForTwo}</h3> */}
            
            {/* <h3>Menu</h3>
            <ul>
                {menu.map((item) => (
                    <li key={item.id}>
                        {item.name} – Rs.{item.price}
                    </li>
                ))}
            </ul> */}
            {/* Accordion */}
            {/*  controlled component  */}
            {menuCategories.map((category , index) => {
                return (
                    <RestaurentCategories 
                        key={category.id} 
                        data={category}
                        showItems = {index === showIndex ? true : false }
                        setShowIndex = {() => {
                            if(index === showIndex) {
                                setShowIndex(null);
                            } else {
                                setShowIndex(index);
                            }
                            
                        }}
                        dummy={dummy}
                    />
                );
            })}

        </div>
    );
};

export default RestaurantMenu;
