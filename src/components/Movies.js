import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
export default function Movies() {
  const [query, setQuery] = useState("avatar");
  const [movies, setMovies] = useState([]);

  const getMovies = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=ec0d0ac1a02925c493e247d245274ced&query=${query}`
      )
      .then((response) => {
        setMovies(response.data.results.slice(0, 6));
      });
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <main className="MainMovies">
      <div>
        <label>
          {" "}
          recherche :
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            placeholder="nom du film"
          />
        </label>
        <button onClick={getMovies}> rechercher ! </button>

        {/* puisque ena 3andi tawwa un tableau plein des films
        je vais essayer de parcourir ce tableau la , et pour
        chaque element je vais affichier le titre 
        
        */}
      </div>
      <Container>
        <Row xs={1} md={3}>
          {movies.map((element) => {
            return (
              <Col>
                <Card style={{ width: "18rem", margin: "25px" }}>
                  <Card.Img
                    variant="top"
                    src={`https://image.tmdb.org/t/p/w500${element.poster_path}`}
                  />
                  <Card.Body>
                    <Card.Title>{element.original_title}</Card.Title>
                    <Card.Text>{element.overview.slice(0, 40)} ...</Card.Text>
                    <Button variant="primary">continuez la lecture</Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </main>
  );
}
