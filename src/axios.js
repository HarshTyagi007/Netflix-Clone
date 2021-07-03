import axios from "axios";
//base url to make requests to the movie database
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
}) ;

instance.get('/foobar');

//https://api.themoviedb.org/3/foobar

export default instance; /* We can only one default export in a file */ 