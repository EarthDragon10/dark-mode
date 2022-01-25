import { useState, useEffect } from "react";
import data from "./data";
import Article from "./Article";

const getFromLocalStorage = () => {
  if (localStorage.getItem("theme")) {
    return localStorage.getItem("theme");
  } else {
    return "light-mode";
  }
};

function App() {
  const [theme, setTheme] = useState(getFromLocalStorage());

  const changeTheme = () => {
    if (theme === "light-mode") {
      setTheme("dark-mode");
    } else {
      setTheme("light-mode");
    }
  };

  console.log(theme);

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <section className="section-center">
      <div className="container">
        <button className="btn" onClick={changeTheme}>
          Cambia
        </button>
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
