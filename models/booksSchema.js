const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const bookSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true
  },
  author: {
    type: Array,
    required: true
  },
  description: String,
  image: {
    type: String,
    default: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png'
  },
  link: String,
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;