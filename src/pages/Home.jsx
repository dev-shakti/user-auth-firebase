import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-page">
      <div className="home-container">
        <h1>Welcome to the Home Page</h1>
        <p>
          This is the home page of the application. You can navigate to the
          login or register page using the links below.
        </p>
        <div className="links home-links">
          <Link className="links" to="/login">
            Login
          </Link>
          <Link className="links" to="/register">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
