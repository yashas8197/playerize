import { useParams } from "react-router-dom";
import Header from "../components/Header"
import Footer from "../components/Footer"

const PlayerDetails = () => {
  let { playerId } = useParams();

  const playerDetails = [
    {
      id: "1",
      name: "Lional Messi",
      position: "Forword",
      team: "Paris Saint-German",
    },
    {
      id: "2",
      name: "Cristiano Ronaldo",
      position: "Forword",
      team: "Manchester United",
    },
    {
      id: "3",
      name: "Naymar Jr",
      position: "Forword",
      team: "Paris Saint-German",
    },
  ];
  const playerData = playerDetails.find((player) => player.id === playerId);
  return (
    <>
      <Header/>
    <div className="container my-4">
      <h3>{playerData.name}</h3>
      <ul className="list-group">
        <li className="list-group-item">
          <strong>Name: </strong>
          {playerData.name}
        </li>
        <li className="list-group-item">
          <strong>Position: </strong>
          {playerData.position}
        </li>
        <li className="list-group-item">
          <strong>Team: </strong>
          {playerData.team}
        </li>
      </ul>
    </div>
      <Footer/>
      </>
  );
};

export default PlayerDetails;
