import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
	const { restaurentData }  = props;
	const info = restaurentData?.info || {};

	let {
		cloudinaryImageId = '',
		name = "Unknown",
		cuisines = [],
		avgRating = "-",
		sla = {}
	} = info;
    
	const imageUrl = cloudinaryImageId
    ? `${CDN_URL}${cloudinaryImageId}`
    : '';

	return (
		<div className="m-4 p-2 w-[250px] bg-gray-100 hover:bg-gray-200 rounded-md">
			<img
				alt={`${name} image`}
				className="res-card-image rounded-md h-28 w-full"
				src={imageUrl}
			/>
			<div className="flex flex-col mt-2 justify-end">
				<h3 className="font-bold py-2 text-md truncate ">{name}</h3>
				<h4 className="truncate">{Array.isArray(cuisines) ? cuisines.join(" , ") : cuisines}</h4>
				<h4>{avgRating}</h4>
				<h4>{sla?.deliveryTime ? `${sla.deliveryTime} minutes` : "N/A"}</h4>
			</div>
		</div>
	);
};

export const withPromotedLabel = (RestaurantCard) => {
	return (props) => {
		return (
			<div>
				<div className="absolute bg-black text-white p-2 rounded-lg" >Promoted</div>
				<RestaurantCard  {...props} /> 
			</div>
		)
	}
}

export default RestaurantCard;