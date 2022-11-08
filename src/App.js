// import logo from "./logo.svg";
import "./App.css";
import EducationLevel from "./components/organisms/EducationLevel";
import { Typography } from "@mui/material";
import { Provider } from "./context/Provider";
import Experience from "./components/organisms/Experience";

function App() {
  return (
    <>
      {/* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
  
    </div> */}
      <Provider>
      <Typography>education level</Typography>
      <EducationLevel />
      <Experience />
      </Provider>
    </>
  );
}

export default App;
