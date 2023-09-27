// // src/appcharge-in/components/LoginPage.tsx
// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { login } from '../redux/reducers/authReducer';
// import './LoginPage.css'; // Import the CSS

// const LoginPage: React.FC = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const dispatch = useDispatch();

//   const handleLogin = () => {
//     // Add your authentication logic here
//     dispatch(login());
//   };

//   return (
//     <div className="login-container">
//       <div className="login-form">
//         <h1>Login</h1>
//         <input
//           type="text"
//           placeholder="Adresse mail"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="login-input"
//         />
//         <input
//           type="password"
//           placeholder="mot de passe"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="login-input"
//         />
//         <button onClick={handleLogin}>Login</button>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;

// import React, { useState } from 'react';
// import { AiOutlineEye } from 'react-icons/ai';
// import { BiLogIn } from 'react-icons/bi';
// import { useDispatch } from 'react-redux';
// import { login } from '../redux/reducers/authReducer';
// import './LoginPage.css'; // Import the CSS

// const LoginPage: React.FC = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const dispatch = useDispatch();

//   const handleLogin = () => {
//     // Add your authentication logic here
//     dispatch(login());
//   };

//   return (
//     <section className="login">
//       <div className="header">
//         <h1>Se connecter</h1>
//         <div className="icons">
//           <BiLogIn />
//         </div>
//       </div>

//       <p>Entrez vos identifiants pour accéder á votre <br /> espace personnel.</p>

//       <form onSubmit={handleLogin}>
//         <label htmlFor="Adresse mail">Adresse mail:</label>
//         <input
//           type="text"
//           id="Adresse mail"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="adresse@mail.com"
//           autoComplete="off"
//           required
//         />

//         <label htmlFor="mot de passe">mot de passe:</label>
//         <div className="input-container">
//           <input
//             type="password"
//             id="mot de passe"
//             onChange={(e) => setPassword(e.target.value)}
//             value={password}
//             required
//             className="password-input"
//             placeholder="******"
//           />
//           <AiOutlineEye className="eye-icon" />
//         </div>

//         <div className="remember-forgot">
//           <span>Se souvenir de moi</span>
//           <span>Mot de passe oublié?</span>
//         </div>

//         <button type="submit">SE CONNECTER</button>
//       </form>
//     </section>
//   );
// };

// export default LoginPage;

import React, { useState } from 'react';
import { AiOutlineEye } from 'react-icons/ai';
import { BiLogIn } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { login } from '../redux/reducers/authReducer';
import './LoginPage.css'; // Make sure to replace with your updated CSS file

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your authentication logic here
    dispatch(login());
  };

  return (
    <section className="login">
      <div className="header">
        <h1>Se connecter</h1>
        <div className="icons">
          <BiLogIn />
        </div>
      </div>

      <p>Entrez vos identifiants pour accéder á votre <br /> espace personnel.</p>

      <form onSubmit={handleLogin}>
        <label htmlFor="Adresse mail">Adresse mail:</label>
        <input
          type="text"
          id="Adresse mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="adresse@mail.com"
          autoComplete="off"
          required
        />

        <label htmlFor="mot de passe">mot de passe:</label>
        <div className="input-container">
          <input
            type="password"
            id="mot de passe"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
            className="password-input"
            placeholder="******"
          />
          <AiOutlineEye className="eye-icon" />
        </div>

        <div className="remember-forgot">
          <span>Se souvenir de moi</span>
          <span>Mot de passe oublié?</span>
        </div>

        <button type="submit">SE CONNECTER</button>
      </form>
    </section>
  );
};

export default LoginPage;
