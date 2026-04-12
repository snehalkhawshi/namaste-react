import { useState  , useMemo } from "react";
import { findNthPrime } from "../utils/constants";
const Demo = () => {
    const [text , setText] = useState(0);

    const [theme , setTheme] = useState(false);

    // heavy operation

    console.log("Rendering...................");

    const prime = useMemo(() => findNthPrime(text) , [text]);
    // First parameter is a function whose return value will be memoized.
    // React caches the result of this function.
    // The cached value is reused until the dependency (text) changes.

    const a = 10;

    return (
        <div className={"m-2 p-2 w-96 h-96 border border-black " + ( theme  && "bg-gray-900 text-white")}>
            <div> 
                <button className="bg-green-300 m-2 p-4" onClick={() => setTheme(!theme)}>Toggle </button>
            </div>
            <div>
                {/* <input className="w-72 border border-black" type="text" value={text} onChange={(e) => setText(e.target.value)}/> */}
            </div>
            <div>
                <input className="w-72 border border-black" type="number" value={text} onChange={(e) => setText(e.target.value)}/>
                <h1 className="font-bold">Nth Prime: {prime}</h1>
            </div>
        </div>
    )
}


export default Demo;