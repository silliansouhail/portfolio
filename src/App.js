import './App.css';
import { Banner,NavBar,Skill,Projects } from './components';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skill />
      <Projects />
      <Contact/>
    </div>
  );
}

export default App;
