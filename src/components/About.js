import UserClass from "./UserClass";
import User from "./User";

const About = () => {
  return (
    <div className="about-us">
      <h1>About Us</h1>
      <h2>Welcome to the About Page</h2>

      <User name="Akanksha" location="Jaipur" username="AccioAkanksha" />
      <User name="Virat" location="Delhi" username="VibesVirat" />
      <User name="Rohit" location="Mumbai" username="RockingRohit" />
    </div>
  );
};

export default About;

 
 