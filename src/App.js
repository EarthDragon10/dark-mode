import { useState, useEffect } from "react";
import data from "./data";
import Article from "./Article";

function App() {
  return (
    <section className="section-center">
      <div className="container">
        <button className="btn">Cambia</button>
        <section className="article-section">
          {data.map((el) => {
            return <Article key={el.id} {...el} />;
          })}
        </section>
      </div>
    </section>
  );
}

export default App;
