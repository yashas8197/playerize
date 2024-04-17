import Footer from "../components/Footer";

const Report = () => {
  return (
    <>
      <main className="container my-4">
        <h1>Team Performance Report</h1>
        <hr />
        <div className="row">
          <div className="col-md-4">
            <div className="card-body">
              <h2>Top Scorer</h2>
              <p>Name: Lional Messi</p>
              <p>Goals Scored: 25</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-body">
              <h2>Best Assister</h2>
              <p>Name: Neymar Jr</p>
              <p>Goals Scored: 15</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-body">
              <h2>Most Valuable Player (MVP)</h2>
              <p>Name: CR7</p>
              <p>Goals Scored: 10</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Report;
