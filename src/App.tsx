import './App.css';
import { Header } from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import { ComparisonPage } from './pages/ComparisonPage/ComparisonPage';

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<ComparisonPage />} />
            </Routes>
        </>
    );
}

export default App;
