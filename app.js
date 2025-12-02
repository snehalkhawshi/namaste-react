import React from "react";
import ReactDOM from "react-dom/client";


// react element single line
const heading = <h1 id="heading"> Namaste Javascript from react element multiline ✨ </h1>;

// React element multi line
const headingElement = (
    <h1 id="heading">
        Namaste Javascript from react element multiline ✨
    </h1>
);

// functional component is normal javascript function returns jsx
const HeadingComponent = () => <h1 className="heading"> Namaste Javascript from functional component single line ✨ </h1>;

const TitleComponent = () => <h1 className="heading"> Namaste Javascript Title ✨ </h1>;

const NormalFunctionComponent = function () {
    return <h2>I want to learn react</h2>
}

const title = (
    <h3>This is react element</h3>
)

// {} in this we can write any js code
// 1. variable

let number = 100000;

const HeadingComponentMultiline = () => {
    return <div id="container">
                <NormalFunctionComponent />
                <TitleComponent />
                {number}
                {title}
                <h1 className="heading">
                    Namaste Javascript from functional component multi line ✨ 
                </h1>
            </div>;
}

// with parenthesis

// const HeadingComponentMultiline = () => (
//     <div id="container">
//         <NormalFunctionComponent />
//         <TitleComponent />
//         <h1 className="heading">
//             Namaste Javascript from functional component multi line ✨
//         </h1>
//     </div>
// );











const root = ReactDOM.createRoot(document.getElementById('root'));

// rederering element
// root.render(headingElement);

// rederering component
root.render(<HeadingComponentMultiline></HeadingComponentMultiline>);
