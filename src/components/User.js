
const User = ({ name, location, username }) => {
    return (
      <div className="user-card">
        <h2>{name}</h2>
        <h3>{location}</h3>
        <h4>{username}</h4>
      </div>
    );
  };
  
  export default User;
  