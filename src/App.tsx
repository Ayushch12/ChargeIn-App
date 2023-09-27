// src/appcharge-in/App.tsx
import React from 'react';
import { Provider } from 'react-redux';
import LoginPage from './components/LoginPage';
import store from './redux/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <LoginPage />
      </div>
    </Provider>
  );
};

export default App;
