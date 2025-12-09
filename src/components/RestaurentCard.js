import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
	console.log("The Shubham Kumar");
	// console.log(props,"props");
	const { restaurentData }  = props;
	// console.log(restaurentData , "restaurentData");
	const info = restaurentData?.card?.card?.info || {};

	let {
		cloudinaryImageId = '',
		name = "Unknown",
		cuisines = [],
		avgRating = "-",
		sla = {}
	} = info;
    
	const imageUrl = cloudinaryImageId
    ? `${CDN_URL}${cloudinaryImageId}`
    : `${NO_IMAGE}`;

	return (
		<div className="restaurent-card">
			<img
				alt={`${name} image`}
				className="res-card-image"
				src={imageUrl}
			/>
			<h3>{name}</h3>
			<h4>{Array.isArray(cuisines) ? cuisines.join(" , ") : cuisines}</h4>
			<h4>{avgRating}</h4>
			<h4>{sla?.deliveryTime ? `${sla.deliveryTime} minutes` : "N/A"}</h4>
		</div>
	);
};

export default RestaurantCard;