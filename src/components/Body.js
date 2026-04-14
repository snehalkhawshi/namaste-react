import RestaurantCard, {withPromotedLabel} from "./RestaurentCard";
import restaurentData from "../utils/mockData";
import Shimmer from "./Shimmer";
import { useState , useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {

    const [ listOfRestaurents , setListOfRestaurents ] = useState([]);
    
    const [ filteredListOfRestaurents , setFilteredListOfRestaurents ] = useState([]);
    
    let [ result , setResult ] = useState([]);

    const [searchText , setSearchText] = useState('');

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    useEffect(() => {
            fetch("https://dummyjson.com/products/1")
            .then((res) => res.json())
            .then((data) => {
            })
            .catch((err) => {});
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setListOfRestaurents(restaurentData);
            setFilteredListOfRestaurents(restaurentData);
        }, 2000);

        return () => clearTimeout(timer);

    }, []);

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false) return <h1>Please Check Internet connection</h1>

    const {loggedInUser , setUserName} = useContext(UserContext);

	return listOfRestaurents.length === 0 ?
        <Shimmer /> :
        (
            <div className="body">
                <div className="filter flex">
                    <div className="search px-4">
                        <input type="text" className="border-solid border-black border rounded-sm"  value={searchText} 
                        onChange={(e)=>{
                            setSearchText(e.target.value)
                        }}/>
                        <button className="search-button bg-green-100 m-4 px-4 py-1 rounded-sm" onClick={() => {

                            let searchFiltered = listOfRestaurents.filter((res) =>
                                res.card.card.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );

                            setFilteredListOfRestaurents(searchFiltered);

                        }}>Search</button>
                    </div>
                    <div className="flex items-center">
                        <button 
                            className="bg-gray-100 m-4 px-4 py-1 rounded-sm" 
                            onClick = {() => {
                                const filteredList = listOfRestaurents.filter((res) => res.info.avgRating > 4);
                                setFilteredListOfRestaurents(filteredList);
                            }}
                        >
                            Top rated restaurent
                        </button>
                    </div>
                    <div  className="flex items-center ">
                        <label className="mr-4">Username : </label>
                        <input className="border border-black" value = {loggedInUser}
                        onInput={(e) => setUserName(e.target.value)}/>
                    </div>
                </div>

                <div className="restaurent-container flex flex-wrap">
                    { filteredListOfRestaurents.map((restaurant) =>
                        <Link key = {restaurant.info.id} to={"/restaurants/" + restaurant.info.id} >
                            { restaurant.info.promoted ? 
                                (
                                    <RestaurantCardPromoted restaurentData = {restaurant} /> 
                                ) :
                                ( 
                                    <RestaurantCard  restaurentData = {restaurant}/>
                                )
                            }
                           </Link>)}
                </div>

                <div>{result}</div>
            </div>
        );
};

export default Body;