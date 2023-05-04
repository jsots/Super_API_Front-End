import { useState } from 'react';
import { signIn } from '../services/users';
import { useNavigate } from 'react-router-dom';

const SignIn = (props) => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: '',
    password: '',
    isError: false,
    errorMsg: '',
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const onSignIn = async (event) => {
    event.preventDefault();
    const { onSignIn } = props;
    try {
      const user = await signIn(form);
      onSignIn(user);
      navigate('/');
    } catch (error) {
      console.error(error);
      setForm({
        isError: true,
        errorMsg: 'Invalid Credentials',
        email: '',
        password: '',
      });
    }
  };

  const renderError = () => {
    const toggleForm = form.isError ? 'danger' : '';
    if (form.isError) {
      return (
        <button type='submit' className={toggleForm}>
          {form.errorMsg}
        </button>
      );
    } else {
      return <button type='submit'>Sign In</button>;
    }
  };

  const { email, password } = form;

  return (
    <>
    <div className="signin">
      <h1>Sign In</h1>
    <div className='form-container'>
      <form onSubmit={onSignIn}>
        <label>Email</label>
        <input
          required
          type='text'
          name='email'
          value={email}
          placeholder='Enter Email'
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          required
          name='password'
          value={password}
          type='password'
          placeholder='Password'
          onChange={handleChange}
        />
        {renderError()}
      </form>
    </div>
    </div>
    </>
  );
};

export default SignIn;
