import React,{useState , useEffect} from 'react';
import axios from './axios';
import "./Row.css"
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const baseimage_url="https://image.tmdb.org/t/p/original/";

function Row({title , fetchUrl ,isLargeRow}) {
    const [movies,setMovies] = useState([]);
    const [trailerUrl,setTrailerUrl] = useState("");
    
    /* This is a snippet of code which runs on a specific condition/variable like 
    it will be called for netflix original trending now , etc.
    For that react gives us a cool hook called useEffect*/

    useEffect(() =>{
        /*Calling API may take time so we have to define a async function and then call it.  */
        async function fetchData(){
        const request = await axios.get(fetchUrl); 
        setMovies(request.data.results);
        return request;
        }
        fetchData(); 
    } , [fetchUrl]);/* if fetch url is not there  then this hook will only run once it is called Otherwise here
    as soon fetchurl changes it will be called again and again*/
    console.log(movies);
    /* We can also do console.table and doing console.log to see the structure that we need*/ 
    /* This code will render everything that is passed into Row component and return as follows */
    
        const opts = {
            height:"390",
            width:"100%",
            playerVars: {
                autoplay:1,
            },
        };

        const handleClick = (movie) =>
        {
            if(trailerUrl){
                setTrailerUrl('');
            }
            else{
                movieTrailer(movie?.name || "")
                .then( (url) => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get('v'));
                }).catch(error =>console.log(error))
            }
        }       
    return (

        <div className="row">
            <h2>{title}</h2>

            <div className="row_posters">
                {movies.map(movie => (
                 <img 
                    key={movie.id}
                    onClick={() => handleClick(movie)}
                    className={`row__poster ${isLargeRow && "row_posterLarge"}`}
                    src={`${baseimage_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                    alt={movie.name}
                 />
                   
                ))}
            </div>
               { trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/> }
            </div>
    )
}

export default Row;
