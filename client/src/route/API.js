import axios from "axios";
const BASEURL = 'https://www.googleapis.com/books/v1/volumes?q='
const APIKEY = "&key=AIzaSyApQziwoZ9rW3ZqlxcXIz7Nkq7mC3ppQxE"

export default {
  search: function (query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};