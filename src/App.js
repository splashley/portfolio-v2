import "./App.css";
import portrait from "./assets/portrait.png";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <div><h1>splashley</h1></div>
        <div><FontAwesomeIcon icon="fa-brands fa-twitter" /><FontAwesomeIcon icon="fa-brands fa-linkedin-in" /><FontAwesomeIcon icon="fa-brands fa-github" /><FontAwesomeIcon icon="fa-brands fa-twitch" /></div>
      </header> */}
      <div className="content">
        <div className="content-left">
          <img src={portrait} alt="Ashley Hynes" className="portrait" />
        </div>
        <div className="content-right">
          <h1>Hi, I'm Splashley 😊</h1>
          <p>Software Developer @ <a href="https://www.onawhim.com" target="_blank" rel="noopener noreferrer">WHIM</a></p>
          <p>Find my work on <a href="https://github.com/splashley" target="_blank" rel="noopener noreferrer">GitHub</a>.</p>
          <p>Reach out to me via <a href="https://www.linkedin.com/in/ashley-hynes/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.</p>
          <p>In my spare time I stream development on <a href="https://www.twitch.tv/splashley" target="_blank" rel="noopener noreferrer">Twitch</a>.</p>
        </div>
      </div>
      <footer>Coded with 💕 by myself.</footer>
    </div>
  );
}

export default App;
