import React, { useState } from "react";
import "./Movie.scss";
import { Link, useParams } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { useAPI } from "../../context/MoviesContext";
import { Button } from "react-bootstrap";
import BuyNowModal from "../../components/BuyNowModal/BuyNowModal";

const Movie = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { id } = useParams();
  const { isLoading, movies } = useAPI();
  const movie = movies.find((item) => item.show.id == id);

  return (
    <>
      {isLoading ? (
        <div className="lds-dual-ring"></div>
      ) : (
        <div className="movieDetail-container">
          <div className="movieDetail-backdrop-container">
            <img
              src={movie.show.image.original}
              className="movieDetail-backdrop"
              alt={`${movie.name} Poster`}
            ></img>
            <div className="shadow"></div>
          </div>
          <div className="movieDetail">
            <div className="buy-card">
              <img
                className="movieDetail-poster"
                src={`${movie.show.image.original}`}
                alt={`${movie.show.name} Poster`}
              ></img>
              <div className="info">
                <div className="buy">
                  {/* Modal */}
                  <button onClick={handleShow} className="button">
                    Buy Ticket
                  </button>

                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Buy Ticket</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <BuyNowModal handleClose={handleClose} movie={movie.show.name}/>
                    </Modal.Body>
                  </Modal>
                </div>
              </div>
            </div>

            <div className="movieDetail-disc">
              <div className="movieDetail-title">{movie.show.name}</div>
              <div className="movieDetail-genres">{`Genres: ${movie.show.genres.map(
                (genres) => genres
              )}`}</div>
              <div> {`Runtime: ${movie.show.runtime} min`}</div>
              <div>{`Release date: ${movie.show.premiered}`}</div>
              <h4 style={{ color: "#eaeaea", marginTop: "30px" }}>Overview</h4>
              <div className="movieDetail-overview">
                {movie.show.summary.replace(/<[^>]+>/g, "")}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Movie;
