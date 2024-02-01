import React, {useEffect,useState} from "react";
import "./home.css";
import Slider from "../component/Slider/Slider";
import { Link } from "react-router-dom";

const Home = () => { 

  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.tvmaze.com/search/shows?q=all");
        const data = await response.json();
        setShows(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

   // Filter out shows with null images
  const filteredShows = shows.filter((show) => show.show.image);

  return (
    <>
      <Slider />

      <div className="containershows">
        <div className="title">FEATURED SHOWS</div>
        <div className="description">
          Enjoy our collection of inspiring scripted and unscripted programming
          from today’s most innovative <br /> storytellers like Ava DuVernay,
          Will Packer, and Carlos King.
        </div>
        <div className="card-container">
          <div className="row row-cols-4 row-cols-md-4 g-4">
            {filteredShows.map((show) => (
              <div className="col" key={show.show.id}>
                <div className="card">
                  <img
                    src={show.show.image?.medium || ""}
                    className="card-img-top"
                    alt={show.show.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      <Link to={`/details/${show.show.id}`} className="card-link">
                        View Details
                      </Link>
                    </h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
