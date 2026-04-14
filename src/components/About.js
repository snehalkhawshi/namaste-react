import React from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component {
    constructor (props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                <h1>From User Function</h1>
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



export default About;
