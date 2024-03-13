import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";

const Homepage = () => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    fetchJokes();
  }, []);

  const fetchJokes = async () => {
    try {
      const response = await fetch(
        "https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10"
      );
      const data = await response.json();
      setJokes(data.jokes);
    } catch (error) {
      console.error("Error fetching jokes:", error);
    }
  };

  return (
    <Container className="w-90">
      <h2>Jokes</h2>
      <table className="table table-bordered border-primary table-primary w-80">
        <thead>
          <tr>
            <th>ID</th>
            <th>Joke</th>
          </tr>
        </thead>
        <tbody>
          {jokes.map((joke) => (
            <tr key={joke.id} className="table-primary text-start">
              <td className="table-success p-3 ">{joke.id}</td>
              <td className="table-info p-3">{joke.joke}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};

export default Homepage;
