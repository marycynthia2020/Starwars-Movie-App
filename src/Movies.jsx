import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import logo from "./assets/starwarslogo.svg";
import { nanoid } from 'nanoid';
import "./App.css"
import { darkModeContext } from "./DarkModeProvider.jsx";

const Movies = () => {

  const {darkMode, toggleDarkMode} = useContext(darkModeContext)
  const handleClick = () => {
    toggleDarkMode()
  }

  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://swapi.dev/api/films`);
        setData(response.data.results);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);




  return (
    < div className= {darkMode? "white-container": "black-container"}>
    <button onClick= {handleClick} className= {darkMode? "black-button": "white-button"}>{darkMode? "Dark Theme": "White theme"}</button>
      <div className="logo-container">
        <img src={logo} alt="starwars logo" className ="logo" />
      </div>
      {loading &&
      <div>
        <p>please wait, your data is loading ....</p>
        <div className = "loading-div">
          <img src={logo} alt= "starwars logo"/>
        </div>
        </div>
      }
      {error &&
        <div>{`There is an error fetching your Data: error is ${error}`}</div>
      }
      <div className="movie-grid">
      {data && 
        data.map((items) => {
            return (
                <div key = {nanoid()} className="movie">
                    <a href ="#" className="movie-title">{items.title} </a>
                    <p className="date">{new Date(items.release_date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                  </p>
                    <p className="opening-crawl">{items.opening_crawl.split(" ").slice(0, 33).join(" ")}...</p>
                    <a href="#" className="more-info">More Info</a>

                </div>
            )
        })
      }
      </div>
    </div>
  );
};

export default Movies;
