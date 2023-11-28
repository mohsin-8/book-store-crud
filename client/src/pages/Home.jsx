import React, { useState, useEffect } from "react";
import axios from "axios";
import { BsInfoCircle, BsPlusSquare } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";

import { Link } from "react-router-dom";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

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
          <BsPlusSquare className="bsPlusSquare" />
        </Link>
      </div>

      {loading ? (
        <h3>Loading.....</h3>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th className="table-th">No.</th>
              <th className="table-th">Title</th>
              <th className="table-th">Author</th>
              <th className="table-th">Published Year</th>
              <th className="table-th">Operations</th>
            </tr>
          </thead>

          <tbody>
            {books.map((book, index) => {
              return (
                <tr key={book._id} className="tr-tbody">
                  <td className="tbody-td">{index + 1}</td>
                  <td className="tbody-td">{book.title}</td>
                  <td className="tbody-td">{book.author}</td>
                  <td className="tbody-td">{book.publishedYear}</td>
                  <td className="tbody-td">
                    <div className="flex-operations">
                      <Link to={`/books/details/${book._id}`}>
                        <BsInfoCircle className="bsInfoCircle" />
                      </Link>

                      <Link to={`/books/edit/${book._id}`}>
                        <AiOutlineEdit className="aiOutlineEdit" />
                      </Link>

                      <Link to={`/books/delete/${book._id}`}>
                        <MdOutlineDelete className="mdOutlineDelete" />
                      </Link>
                    </div>
                  </td>
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
