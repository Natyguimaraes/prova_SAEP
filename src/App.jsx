import CadastroUser from './CadastroUser';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<CadastroUser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
