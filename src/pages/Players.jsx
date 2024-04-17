import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Players = () => {
  return (
    <>
      <main className="container my-4">
        <h1>List of Players</h1>
        <ul className="list-group">
          <li className="list-group-item">
            <h5>Lional Messi</h5>
            <p>Forward</p>
            <Link className="btn btn-primary" to="/players/1">
              View Details
            </Link>
          </li>
          <li className="list-group-item">
            <h5>Cristiano Ronaldo</h5>
            <p>Forward</p>
            <Link className="btn btn-primary" to="/players/2">
              View Details
            </Link>
          </li>
          <li className="list-group-item">
            <h5>Naymar Jr</h5>
            <p>Forward</p>
            <Link className="btn btn-primary" to="/players/3">
              View Details
            </Link>
          </li>
        </ul>
      </main>
      <Footer />
    </>
  );
};
export default Players;
