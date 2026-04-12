import { useState , useRef ,useEffect} from "react";
const Demo2 = () => {
    let x = 10;
    const [y, setY] = useState(0);
    const ref = useRef(0);
    console.log(ref);
    const val = useRef(null);
    useEffect(() => {

        val.current = setInterval(() => {
            console.log("I love you shubham", Math.random())
        }, 1000);

        () => { clearInterval (val.current)}

    },[]);

    return (
        <div className="m-4 p-2 bg-slate-100 border border-black w-96 h-96">
            <div>
                <button
                className="m-4 p-2 bg-green-300"
                onClick = {() =>{ 
                    x = x + 1;
                    console.log(x); // x is increses but no way to updated in ui
                }} >Increase x</button>
                <span className="font-bold text-xl">{x}</span>

                <button
                className="m-4 p-2 bg-green-300"
                onClick = {() =>{ 
                   setY(y+1); // x is increses but no way to updated in ui
                }} >Increase y</button>
                <span className="font-bold text-xl">{y}</span>

                <button
                className="m-4 p-2 bg-green-300"
                onClick = {() =>{ 
                   ref.current = ref.current  + 1 ;
                    // x is increses but no way to updated in ui
                    console.log(ref);
                }} >Increase z</button>
                <span className="font-bold text-xl">ref: {ref.current}</span>

                <button
                className="m-4 p-2 bg-green-300"
                onClick = {() =>{ 
                   ref.current = ref.current  + 1 ;
                    // x is increses but no way to updated in ui
                    console.log(ref.current);
                    clearInterval(val.current)
                }} >sop</button>
            </div>
        </div>
    )
}

export default Demo2;