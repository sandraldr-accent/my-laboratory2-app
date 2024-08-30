import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const siteProps = {
  name: {
    value: "Sandra",
    color: "#FF5733"
  },
  surname: {
    value: "León - Del Risco",
    color: "#FF3357"
  },
  title: {
    value: "Software Engineer",
    color: "#33FF57"
  },
  organization: "Accenture",
  chapter: "Frontend",
  email: {
    value: "sandradev@mimail.com",
    color: "#3357FF"
  },
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
          <h1 style={{ color: siteProps.name.color }}>{siteProps.name.value}</h1>
          <h3 style={{ color: siteProps.surname.color }}>{siteProps.surname.value}</h3>
          <h2 style={{ color: siteProps.title.color }}>{siteProps.title.value}</h2>
          <p style={{ color: siteProps.email.color }}>{siteProps.email.value}</p>
        </div>
        <div>
          <p>Organization: {siteProps.organization}</p>
          <p>Chapter: {siteProps.chapter}</p>
          <p>Country: {siteProps.country}</p>
          <p>City: {siteProps.city}</p>
          <p>Age: {siteProps.age}</p>
          <p>
            LinkedIn: 
            <a href={siteProps.linkedin}>
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
