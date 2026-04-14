import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemsList = ({list, dummy}) => {
    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        dispatch(addItem(item)); 
    }

    return (
        <div>
            {list.map((item) => (
                    <div key={item.id} className="flex p-2 mb-2 border border-gray-200 border-b-1 rounded-md last:mb-0">
                        <div className="flex mr-4 w-1/4 relative bg-gray-200">
                            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/potn5xds1x2kx08aaifa"} className="h-20 w-full rounded-md"/>
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                                <button className="px-[5px] bg-white shadow-lg" onClick={() => handleAddItem(item)}>+</button>
                            </div>
                        </div>
                        <div className="flex flex-col  w-3/4">
                            <div className="text-left py-1 flex ">
                                <div className="mr-2">{item.name}</div>
                                <div>-</div>
                                <div className="ml-2">₹{item.price}</div>
                            </div>
                            <p className="text-left text-sm">{item.desc}</p>
                        </div>

                    </div>
            ))}
        </div>
    );
}

export default ItemsList;