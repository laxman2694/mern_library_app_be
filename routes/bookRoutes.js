const express = require("express");
const router = express.Router();
const booksController = require("../controllers/booksController");
const verifyJWT = require("../middleware/verifyJWT");

router.use(verifyJWT);

router
  .route("/")
  .get(booksController.getAllBooks)
  .post(booksController.createNewBook)
  .patch(booksController.updateBook)
  .delete(booksController.deleteBook);

module.exports = router;
