import './App.css';
import CareerPage from './components/CareerPage';
import Header from './components/Header';
import HomePage from './components/HomePage';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import SelfPage from './components/SelfPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/Career' element={<CareerPage />} />
          <Route path='/Self' element={<SelfPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
