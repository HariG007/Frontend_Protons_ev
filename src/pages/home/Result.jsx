// Result.jsx
import "./result.css";

function Result({ nearestStations }) {
  return (
    <div className="Whole_Container">
    <div className="result-containerr">
      {nearestStations.map((station) => (
        <div key={station.name} className="result-card">
          <h4>{station.name}</h4>
          <p>Description: {station.description}</p>
          <p>Location: Lat - {station.lat}, Lng - {station.lng}</p>
          <div>
            <button  className="button-container1" style={{paddingLeft:'20px',marginRight:'10px'}} onClick={() => handleGetDirection(station.lat, station.lng)}>Direction</button>
            <button   className="button-container2" style={{marginLeft:'2px'}} onClick={() => handleShowInfo(station)}>More Info</button>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default Result;
