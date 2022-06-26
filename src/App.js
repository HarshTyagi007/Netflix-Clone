import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner.js';
import Nav from './Nav';


function App() {
  return (
    <div className="App">
      <Nav/>
      
      <Banner/>
     <Row title="HT ORIGINALS" 
     fetchUrl={requests.fetchNetflixOriginals}
     isLargeRow /*By default it is true */
     />
     <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
     <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
     <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
     <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
     <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
     <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
     <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>

    </div>
  );
}

export default App;
