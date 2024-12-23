import "../../src/App.css";
import seriesData from "../api/seriesData.json";
const NetflixSeries = () => {
  return (
    <div className="body">
      <ul>
        {seriesData.map((currentElem) => {
          return (
            <li key={currentElem.id}>
              <div>
                <img className="image" src={currentElem.img_url} alt="" />
              </div>
              <h2>Name: {currentElem.name} </h2>
              <h3> Rating: {currentElem.rating} </h3>
              <p>
                {" "}
                <span> Summary:</span> {currentElem.description}
              </p>
              <p>
                {" "}
                <span>Genre:</span> {currentElem.genre}
              </p>
              <p>
                {" "}
                <span>Cast: </span> {currentElem.cast}
              </p>
              <a href={currentElem.watch_url} target="_blank">
                <button>Watch Now</button>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default NetflixSeries;
