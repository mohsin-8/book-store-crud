import React, { useState } from "react";
import axios from "axios";
import BackButton from "../components/BackButton";
import { useNavigate } from "react-router-dom";

const CreateBooks = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishedYear, setPublishedYear] = useState("");
  const [loading, setLoading] = useState("");

  const navigate = useNavigate();

  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishedYear,
    };

    setLoading(true);

    axios
      .post(`http://localhost:5000/books`, data)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((err) => {
        setLoading(false);
        alert("please filled all fields");
        console.log(err);
      });
  };

  return (
    <div style={{ padding: "2rem 0px" }}>
      <div>
        <BackButton />
        <h1>Create Book</h1>
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
            <div style={{ margin: "1rem 0px" }}>
              <label
                style={{ fontSize: "20px", fontWeight: "bold", color: "grey" }}
              >
                Title
              </label>
              <input
                type="text"
                style={{ border: "2px solid gray", padding: "0px 10px" }}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div style={{ margin: "1rem 0px" }}>
              <label
                style={{ fontSize: "20px", fontWeight: "bold", color: "grey" }}
              >
                Author
              </label>
              <input
                type="text"
                style={{ border: "2px solid gray", padding: "0px 10px" }}
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>

            <div style={{ margin: "1rem 0px" }}>
              <label
                style={{ fontSize: "20px", fontWeight: "bold", color: "grey" }}
              >
                Published Year
              </label>
              <input
                type="text"
                style={{ border: "2px solid gray", padding: "0px 10px" }}
                value={publishedYear}
                onChange={(e) => setPublishedYear(e.target.value)}
              />
            </div>

            <div style={{ margin: "1rem 0px" }}>
              <button
                type="submit"
                onClick={handleSaveBook}
                style={{
                  backgroundColor: "blue",
                  color: "#fff",
                  fontSize: "18px",
                  fontWeight: "600",
                  padding: "5px 20px",
                }}
              >
                Submit
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateBooks;
