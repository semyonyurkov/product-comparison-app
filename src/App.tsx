import './App.css';
import { Header } from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import { ComparisonPage } from './pages/ComparisonPage/ComparisonPage';
import { useSelector } from 'react-redux';

import { IState } from './redux/store';

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
