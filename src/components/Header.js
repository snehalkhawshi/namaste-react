import { LOGO_URL } from "../utils/constants";
import { useState , useEffect , useContext} from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

    const [btnNameReact , setBtnNameReact] = useState("Login");

    let onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);

    // Subscribing to the store using selector
    const cartItems = useSelector((store) => store.cart?.items) || [];

    useEffect(() => {
    }, []);

    return (
        <div className="flex justify-between bg-green-100 h-24 shadow-lg m-2">
            <div className="w-24">
                <img
                    className="w-full"
                    src= { LOGO_URL }
                    alt="Logo"
                />
            </div>

            <div className="flex items-center">
                <ul className="flex">
                    <li>Online status:{onlineStatus? " Online": " Offline"}</li>
                    <li className="px-4">
                        <Link to="/" className="hover:text-slate-500">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about" className="hover:text-slate-500">About</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contact" className="hover:text-slate-500">Contact Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/grocerry" className="hover:text-slate-500">Grocerry</Link>
                    </li>
                    <li className="px-4" > 
                        <Link to="/cart" className="hover:text-slate-500">Cart ({cartItems.length})</Link>
                    </li>
                    <button className="px-4 hover:text-slate-500" onClick={()=> {
                        btnNameReact === "Login" ?
                           setBtnNameReact("Logout") : 
                           setBtnNameReact("Login")
                    }}>
                        {btnNameReact}
                    </button>

                    <li className="px-4" > 
                        <Link to="/demo" className="hover:text-slate-500">Demo </Link>
                    </li>

                    <li className="px-4 hover:text-slate-500 font-bold" >{loggedInUser}</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;

