/* React Imports */
import React from "react";
import { BrowserRouter } from "react-router-dom";

/* My routes import */
import Routes from "./routes";

/* Reset CSS and global styles import */
import GlobalStyles from "./styles/global";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  );
};

export default App;
