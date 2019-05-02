const path = require("path");
const router = require("express").Router();
const booksController = require("../controller/bookController");


router.route("/")
  .post(booksController.create);


router
  .route("/saved")
  .get(booksController.findAll)
  .delete(booksController.remove);




module.exports = router;
