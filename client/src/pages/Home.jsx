import React, { useState, useEffect } from "react";
import axios from "axios";
import { BsPlusSquare } from "react-icons/bs";
import { Link } from "react-router-dom";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const apiBaseUrl = process.env.baseUrl;

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5000/books`)
      .then((res) => {
        setBooks(res.data.data);
        console.log(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className="home-content">
        <h1>Book Store Crud</h1>
        <Link to="/books/create">
          <BsPlusSquare />
        </Link>
      </div>

      {loading ? (
        <h3>Loading.....</h3>
      ) : (
        <table>
          <thead>
            <tr>
              <th>No.</th>
              <th>Title</th>
              <th>Author</th>
              <th>Published Year</th>
              <th>Operations</th>
            </tr>
          </thead>

          <tbody>
            {books.map((book, index) => {
              return (
                <tr key={book._id}>
                  <td>{index + 1}</td>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.publishedYear}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Home;
