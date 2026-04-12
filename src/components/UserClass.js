import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);
        console.log("Child constructor");

        this.state = {
            userInfo: {
                name: "User",
                location: "Default",
                avatar_url: "https://www.dreamstime.com/default-avatar-female-profile-user-icon-picture-portrait-symbol-member-people-flat-style-circle-button-photo-silhouette-image270625866"
            },
        };
    }

    // 🔹 Runs before render (Mounting + Updating)
    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps");
        return null; // rarely used
    }

    // 🔹 Controls re-rendering
    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps, nextState);
        console.log("shouldComponentUpdate");
        return true; // must return true to re-render
    }

    // 🔹 Runs after first render (Best for API calls)
    async componentDidMount() {
        console.log("componentDidMount");

        const response = await fetch(
            "https://api.github.com/users/snehalkhawshi"
        );
        const json = await response.json();

        this.setState({
            userInfo: json
        });
    }

    // 🔹 Capture info before DOM updates
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate");
        return null;
    }

    // 🔹 Runs after update
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate");
    }

    // 🔹 Cleanup
    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    render() {
        console.log("render");

        const { name, location, avatar_url } = this.state.userInfo;

        return (
            <div className="user-card">
                <img src={avatar_url} alt="User Avatar" className="imgAvatar"/>
                <h1>{name}</h1>
                <h3>{location}</h3>
            </div>
        );
    }
}

export default UserClass;
