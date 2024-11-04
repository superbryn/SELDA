import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Homepage';
import Selda from './selda';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/selda" element={<Selda />} />
            </Routes>
        </Router>
    );
}

export default App;
