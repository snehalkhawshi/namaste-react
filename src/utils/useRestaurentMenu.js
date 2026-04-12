import { useEffect, useState } from "react";
import restaurentData from "../utils/mockData";
const useRestaurantMenu = (resId) => {
    // get from restaurentMenu component

    const[data , setMenuData] = useState(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            const restaurant = restaurentData.find(
                (res) => res.info.id === resId 
            );
            setMenuData(restaurant);
        }, 2000);

        return () => clearTimeout(timer);

    }, []);

    return data;

}

export default useRestaurantMenu;