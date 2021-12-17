import React from "react";
import Item from "../../components/Item/Item";
import { useAPI } from "../../context/MoviesContext";
import "./Home.scss";

const Home = () => {
  // Grab data from useAPI in global context
  const { movies, isLoading } = useAPI();

  return (
    <div>
      <main>
        {isLoading ? (
          <div className="lds-dual-ring"></div>
        ) : (
          <div className="wrapper">
            {movies.map((item) => (
              <Item key={item.score} item={item.show}></Item>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;
