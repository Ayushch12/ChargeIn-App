
// import React from 'react';
// import { Provider } from 'react-redux';
// import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

// import HomePage from './components/HomePage';
// import LoginPage from './components/LoginPage';
// import store from './redux/store';

// const App: React.FC = () => {
//   return (
//     <Provider store={store}>
//       <Router>
//         <div className="App">
//           <Routes>
//             <Route path="/" element={<LoginPage />} />
//             <Route path="/homepage" element={<HomePage />} />
//           </Routes>
//         </div>
//       </Router>
//     </Provider>
//   );
// };

// export default App;








import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import React, { useMemo } from 'react';
import { Provider, useSelector } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Dashboard from "./scenes/dashboard";
import Layout from "./scenes/dashboard/layout";

import { themeSettings } from "../theme";
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import store from './redux/store';






interface GlobalState {
  mode: string;
}

interface RootState {
  global: GlobalState;
}


const App: React.FC = () => {
  const mode = useSelector((state: RootState) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);


  return (
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="App">
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/homepage" element={<HomePage />} />
              <Route element={<Layout />}>
                <Route path="/dashboard" element={<Dashboard />} />
              </Route>
            </Routes>
          </div>
        </ThemeProvider>
      </Router>
    </Provider>
  );
};

export default App;

