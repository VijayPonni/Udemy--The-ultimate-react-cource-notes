import PageNav from '../Components/PageNav';
import { useAuthContext } from '../src/contexts/FakeAuthContext';
import styles from './Login.module.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Components/Button';

export default function Login() {
  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState('jack@example.com');
  const [password, setPassword] = useState('qwerty');

  const navigate = useNavigate();

  const { login, isAuthenticated } = useAuthContext();

  // const { email, password } = userDetails;

  useEffect(() => {
    isAuthenticated && navigate('/app', { replace: true });
  }, [isAuthenticated, navigate]);

  function handleLogin(e) {
    console.log('e', e);
    e.preventDefault();
    if (email && password) {
      login(email, password);
    }
  }

  return (
    <main className={styles.login}>
      <PageNav />
      <form className={styles.form}>
        <div className={styles.row}>
          <label htmlFor='email'>Email address</label>
          <input
            type='email'
            id='email'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <Button type='primary' onClick={(e) => handleLogin(e)}>
            Login
          </Button>
        </div>
      </form>
    </main>
  );
}
