import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";

const ShowBooks = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5000/books/${id}`)
      .then((res) => {
        console.log(res.data);
        setBook(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [id]);

  return (
    <div style={{ padding: "4rem 0px" }}>
      <BackButton />
      <h2>Book Data</h2>

      {loading ? (
        <h3>Loading.....</h3>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            border: "2px solid blue",
            padding: "4rem",
          }}
        >
          <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
            <span style={{ fontSize: "18px", fontWeight: "bold" }}>Id: </span>
            <span>{book._id}</span>
          </div>

          <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
            <span style={{ fontSize: "18px", fontWeight: "bold" }}>
              Title:{" "}
            </span>
            <span>{book.title}</span>
          </div>

          <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
            <span style={{ fontSize: "18px", fontWeight: "bold" }}>
              Author:{" "}
            </span>
            <span>{book.author}</span>
          </div>

          <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
            <span style={{ fontSize: "18px", fontWeight: "bold" }}>
              Publish Year:{" "}
            </span>
            <span>{book.publishedYear}</span>
          </div>

          <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
            <span style={{ fontSize: "18px", fontWeight: "bold" }}>
              Create Time:{" "}
            </span>
            <span>{new Date(book.createdAt).toString()}</span>
          </div>

          <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
            <span style={{ fontSize: "18px", fontWeight: "bold" }}>
              Last Update Time:{" "}
            </span>
            <span>{new Date(book.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBooks;
