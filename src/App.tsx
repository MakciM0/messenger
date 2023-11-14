import React from "react";

import styles from "./App.module.scss";
import Header from "./components/Header/Header";
import CurrentPage from "./components/CurrentPage/CurrentPage";

function App() {
  return (
    <div className={styles.App}>
      <Header></Header>
      <CurrentPage></CurrentPage>
    </div>
  );
}

export default App;
