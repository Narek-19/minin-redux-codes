import './App.scss';
import { Nav } from './Components/Nav';
import {Route,Routes} from 'react-router-dom';
import { Home } from './Components/Pages/Home';
import { ProjectOne } from './Components/Pages/ProjectOne';
import { ProjectTwo } from './Components/Pages/ProjectTwo';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/project1" element={<ProjectOne />}/>
        <Route exact path="/project2" element={<ProjectTwo />}/>
      </Routes>
    </div>
  );
}

export default App;
