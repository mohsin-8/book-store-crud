const express = require("express");
const router = express.Router();
const BookModel = require("../models/BookModel");

// post api for book create
router.post("/", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishedYear) {
      return res.status(400).send({
        message: "Send all required fields: title, author, publishedYear",
      });
    }

    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishedYear: req.body.publishedYear,
    };

    const book = await BookModel.create(newBook);
    return res.status(201).send(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// get api for get all books
router.get("/", async (req, res) => {
  try {
    const getBooks = await BookModel.find({});

    return res.status(200).json({
      count: getBooks.length,
      data: getBooks,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// get api for get book by its id
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const getBookById = await BookModel.findById(id);

    return res.status(200).send(getBookById);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// update api for update book by its id
router.put("/:id", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishedYear) {
      return res.status(400).send({
        message: "Send all required fields: title, author, publishedYear",
      });
    }

    const { id } = req.params;

    const updateResult = await BookModel.findByIdAndUpdate(id, req.body);

    if (!updateResult) {
      return res.status(404).json({ message: "Book not found!" });
    }

    return res.status(200).send({ message: "Book updated successfuly" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// delete api for delete book by its id
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const resultDeleteBooks = await BookModel.findByIdAndDelete(id);

    if (!resultDeleteBooks) {
      return res.status(404).json({ message: "Book not found!" });
    }

    return res.status(200).send("book deleted successfully");
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});
module.exports = router;
