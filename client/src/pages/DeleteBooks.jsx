import React, { useState } from "react";
import axios from "axios";
import BackButton from "../components/BackButton";
import { useNavigate, useParams } from "react-router-dom";

const DeleteBooks = () => {
  const [loading, setLoading] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();

  const handleDeleteBook = () => {
    setLoading(true);

    axios
      .delete(`http://localhost:5000/books/${id}`)
      .then((res) => {
        console.log(res);
        setLoading(false);
        navigate("/");
      })
      .catch((err) => {
        setLoading(false);
        alert("error white deleting book");
        console.log(err);
      });
  };

  return (
    <div style={{ padding: "2rem 0px" }}>
      <div>
        <BackButton />
        <h1>Delete Book</h1>
        {loading ? (
          <h1>Loading.....</h1>
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              border: "2px solid blue",
              width: "600px",
              padding: "2rem",
            }}
          >
            <h3>Are you sure want to delete this book?</h3>

            <button
              style={{
                padding: "20px",
                backgroundColor: "red",
                color: "#fff",
                margin: "2rem 0px",
                width: "100%",
              }}
              onClick={handleDeleteBook}
            >
              Yes, Delete it
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DeleteBooks;
