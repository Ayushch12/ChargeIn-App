

import React from 'react';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'; // Updated import statement

import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import store from './redux/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes> {/* Updated to Routes */}
            <Route path="/" element={<LoginPage />} /> {/* Updated syntax */}
            <Route path="/homepage" element={<HomePage />} /> {/* Updated syntax */}
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;

