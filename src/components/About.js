import React from "react";
import User from "./user";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

// class About extends Component
class About extends React.Component {
    constructor (props) {
        super(props);
        console.log("Parent Constructor");
    }

    componentDidMount() {
        console.log("Parent component did mount");
    }

    render() {
        console.log("Parent render");
        return (
            <div>
                <h1>From User Function</h1>
                {/* <User name={"Snehal Khawshi from function"} email={"snehalkhawshi20@gmail.com from function"} location={"Pune from function"} /> */}
                <div>
                    LoggedIn User : 
                    <UserContext.Consumer>
                        {({loggedInUser}) => <h1>{loggedInUser}</h1>}
                    </UserContext.Consumer>
                </div>
                <h1>From User Class</h1>
                <UserClass name={"child1"} email={"child1@gmail.com from class"} location={"Pune"} />
                {/* <UserClass name={"child2"} email={"child1@gmail.com from class"} location={"nagpur"} />
                <UserClass name={"child3"} email={"child1@gmail.com from class"} location={"Patna"} /> */}
            </div>
        )
    }

}

// const About = () => {
//         return (
//         <div>
//             <h1>From User Function</h1>
//             <User name={"Snehal Khawshi from function"} email={"snehalkhawshi20@gmail.com from function"} location={"Pune from function"} />

//             <h1>From User Class</h1>
//             <UserClass name={"Snehal Khawshi from class"} email={"snehalkhawshi20@gmail.com from class"} location={"Pune from class"} />
//         </div>
//     )
// }

/*

import React from "react";
import User from "./user";
import UserClass from "./UserClass";

// class About extends Component
class About extends React.Component {
    constructor (props) {
        super(props);
        console.log("Parent Constructor");
    }

    componentDidMount() {
        console.log("Parent component did mount");
    }

    render() {
        console.log("Parent render");
        return (
            <div>
                <h1>From User Function</h1>
                {/* <User name={"Snehal Khawshi from function"} email={"snehalkhawshi20@gmail.com from function"} location={"Pune from function"} /> }

                <h1>From User Class</h1>
                <UserClass name={"child1"} email={"child1@gmail.com from class"} location={"Pune"} />
                <UserClass name={"child2"} email={"child1@gmail.com from class"} location={"nagpur"} />
                <UserClass name={"child3"} email={"child1@gmail.com from class"} location={"Patna"} />
            </div>
        )
    }

}

*/
/*

- Parent Constructor
- Parent render
  - child1 Child Constructor
  - child1 Child render

  - child2 Child Constructor
  - child2 Child render

  - child3 Child Constructor
  - child3 Child render

  - child1 Child componenet did mount
  - child2 Child componenet did mount
  - child3 Child componenet did mount

- Parent component did mount

*/

export default About;
