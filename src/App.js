import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from './components/Header';
import TopPage from './components/TopPage';
import WorksPage from './components/WorksPage';
import PRPage from './components/PRPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<TopPage />} />
          <Route path='/Career' element={<WorksPage />} />
          <Route path='/Self' element={<PRPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
