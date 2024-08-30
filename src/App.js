import logo from './logo.svg';
import './App.css';

const siteProps = {
  name: "Sandra",
  surname: "León - Del Risco",
  title: "Software Engineer",
  organization: "Accenture",
  chapter: "Frontend",
  email: "sandradev@mimail.com",
  country: "Spain",
  city: "Málaga",
  age: "51",
  linkedin: "https://www.linkedin.com/in/sandra-león-del-risco-3a8a4b1b1/",
};

function App() {
  return (
    <div className="App">
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
        <div>
          <h1>{siteProps.name}</h1>
          <h2>{siteProps.title}</h2>
          <p>{siteProps.email}</p>
        </div>
      </header>
    </div>
  );
}

export default App;
