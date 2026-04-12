const User = (snehal) => {
    return (
        <div className="user-card">
            <div>User</div>
            <h1> { snehal.name } </h1>
            <h3> { snehal.email } </h3>
            <h5> { snehal.location } </h5>
        </div>
    )
}

export default User;