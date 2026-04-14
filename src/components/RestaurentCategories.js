import { useState } from "react";
import ItemsList from "./ItemsList";

const RestaurentCategories = ({data ,showItems , setShowIndex , dummy}) => {
    let handleClick = () => {
        setShowIndex();
    }
    return (<div>
                <div className="rounded-lg w-1/2 mx-auto my-4 p-4 bg-gray-50 shadow-lg ">
                    <div className = "flex justify-between mb-2 cursor-pointer" onClick={handleClick}>
                        <span className="font-bold ">{data.title} ({data.itemCards.length})</span>
                        <span>⬇️</span>
                    </div>
                    {showItems && <ItemsList key={data.id} list={data.itemCards} dummy={dummy}/>}
                    
                </div> 


    </div>)
}

export default RestaurentCategories;