import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            userInfo: {
                name: "User",
                location: "Default",
                avatar_url: "https://www.dreamstime.com/default-avatar-female-profile-user-icon-picture-portrait-symbol-member-people-flat-style-circle-button-photo-silhouette-image270625866"
            },
        };
    }

    static getDerivedStateFromProps(props, state) {
        return null; 
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true; 
    }

    async componentDidMount() {
        const response = await fetch(
            "https://api.github.com/users/snehalkhawshi"
        );
        const json = await response.json();

        this.setState({
            userInfo: json
        });
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
    }

    componentWillUnmount() {
    }

    render() {
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
