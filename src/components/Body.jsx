import { Link } from "react-router-dom";

const Body = () => {
  return (
    <main className="container my-4">
      <img
        src="https://placehold.co/600x400?text=Players+Playing"
        className="img-fluid rounded"
      />

      <div className="my-4">
        <h2>Our Players</h2>
        <p>
          Meet our Talented team og players who work hard to achive success on
          the fiels
        </p>
        <Link className="btn btn-primary" to="/players">
          View Players
        </Link>
      </div>

      <div className="my-4">
        <h2>Team Performance</h2>
        <p>
          Explore our team's performace statistics to gain insights into our
          success on the field
        </p>
        <Link className="btn btn-primary" to="/report">
          View Performance
        </Link>
      </div>
    </main>
  );
};

export default Body;
