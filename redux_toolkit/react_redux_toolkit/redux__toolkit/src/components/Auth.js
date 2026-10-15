import { Login } from '../store/AuthSlice';
import classes from './Auth.module.css';
import { useSelector,useDispatch } from 'react-redux';

const Auth = () => {
  const dispatch = useDispatch()
  
  function handleLogIn(e){
    e.preventDefault()
    dispatch(Login())
  }
  
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={handleLogIn}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
