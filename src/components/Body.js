import RestaurantCard, {withPromotedLabel} from "./RestaurentCard";
import restaurentData from "../utils/mockData";
import Shimmer from "./Shimmer";
import { useState , useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
    // local state variable - super powerful variable

    const [ listOfRestaurents , setListOfRestaurents ] = useState([]);
    // let listOfRestaurents = restaurentData;

    const [ filteredListOfRestaurents , setFilteredListOfRestaurents ] = useState([]);
    
    let [ result , setResult ] = useState([]);

    const [searchText , setSearchText] = useState('');

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    useEffect(() => {
            fetch("https://dummyjson.com/products/1")
            .then((res) => res.json())
            .then((data) => {
                // console.log(data, "data");
            })
            .catch((err) => console.error(err));
    }, []);

    // useEffect(() => {
    //     fetchRestaurants();
    // }, []);

    // const fetchRestaurants = async () => {
    //     try {
    //         const url =
    //             "https://corsproxy.io/?" +
    //             encodeURIComponent("https://namastedev.com/api/v1/listRestaurants");
    //         const response = await fetch(url);
    //         const json = await response.json();
    //         console.log(json);
    //         const restaurantData =json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    //         setRestaurants(restaurantData || []);
    //     } catch (error) {
    //         console.error("Error:", error);
    //     } finally {
    //         // setLoading(false);
    //     }
    // };


    // load data after 5 seconds (for shimmer effect)
    useEffect(() => {
        const timer = setTimeout(() => {
            setListOfRestaurents(restaurentData);
            setFilteredListOfRestaurents(restaurentData);
        }, 2000);

        return () => clearTimeout(timer);

    }, []);

    // if (listOfRestaurents.length === 0) {
    //     return <Shimmer />;
    // }

    // const fetchData = async () => {
    //     const response = await fetch("/restaurants.json");

    //     console.log("STATUS:", response.status);
    //     console.log("URL:", response.url);

    //     const text = await response.text();
    //     console.log("RAW RESPONSE ↓↓↓");
    //     console.log(text);
    // };

    // useEffect(() => {
    //     fetchData();
    // } , []);

    // whenever we update the state variable , react triggers reconcillation cycle (re-render the component)

    // console.log("Body renderrd");
    const onlineStatus = useOnlineStatus();
    // console.log(onlineStatus);

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
                            // filter restaurent card and update the ui
                            // searchText

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

                    {/* <button className="filter-btn"  onClick = { practiseFunction }> Practise </button> */}
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