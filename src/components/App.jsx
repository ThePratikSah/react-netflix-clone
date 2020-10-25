import React from "react";
import Row from "./Row";
import Banner from "./Banner";
import requests from "../requests";
import "../stylesheet/App.css";

function App() {
  return (
    <div className="app">
      <Banner />
      <Row title="Netflix Originals" fetchURL={requests.action} isLargeRow />
      <Row title="Trending Now" fetchURL={requests.trending} />
      <Row title="Top Rated" fetchURL={requests.top_rated} />
      <Row title="Action Movies" fetchURL={requests.action} />
      <Row title="Comedy Movies" fetchURL={requests.comedy} />
      <Row title="Horror Movies" fetchURL={requests.horror} />
      <Row title="Romance Movies" fetchURL={requests.romance} />
      <Row title="Documentaries" fetchURL={requests.documentaries} />
    </div>
  );
}

export default App;
