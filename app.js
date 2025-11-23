// const heading = React.createElement( "h1", { id: "heading" },"Hii Snehal!");

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

const parent = React.createElement("div" , {id: "parent"} ,
    [
        React.createElement("div" , {id: "child1"} ,
            [
                React.createElement("h1" , {id: "heading1"} , 'snehal'),
                React.createElement("h1" , {id: "heading2"} , 'shubham')
            ]),
        React.createElement("div" , {id: "child2"} , 
            [
                React.createElement("h1" , {id: "heading3"} , 'snehal'),
                React.createElement("h1" , {id: "heading4"} , 'shubham')
            ])
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
