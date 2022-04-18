import './App.css';
import BasicForm from './components/BasicForm.jsx';
import Home from './components/Home.jsx'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<BasicForm />}></Route>
          <Route exact path="/home" element={<Home />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
