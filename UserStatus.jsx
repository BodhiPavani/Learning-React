const Userstatus=(props) => {
    if (props.loggedIn && props.isAdmin) {
        return <h3>Welcome Admin</h3>
    } else {
        return <h3>Welcome User</h3>
    }
};
export default Userstatus;