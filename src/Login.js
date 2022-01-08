import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth } from './firebase';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [profilePic, setProfilePic] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const dispatch = useDispatch();

  const register = () => {
    if (!name) {
      return alert('Please insert your name');
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profilePic,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoURL: profilePic,
              })
            );
          });
      })
      .catch((error) => alert(error.message));
  };

  const loginToApp = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login">
      <img src="https://logos-download.com/wp-content/uploads/2016/03/LinkedIn_Logo_2019.png" alt="linkedin" />

      <form onSubmit={loginToApp}>
        <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Full Name" />
        <input value={profilePic} onChange={(e) => setProfilePic(e.target.value)} type="text" placeholder="Profile picture URL (optional)" />
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="e-mail" />
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" />
        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>

      <p>
        Not a member?{' '}
        <span className="login__register" onClick={register}>
          Register now!
        </span>
      </p>
    </div>
  );
};

export default Login;
