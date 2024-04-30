import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: '',
    password: ''
  });
  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    try {
      const { data } = await axios.post('/login', {
        email,
        password
      });
      if (data.error) {
        console.log(data.error);
      } else {
        setData({});
        navigate('/');
        window.location.reload();
      }
    } catch (error) {}
  };

  return (
    <div>
      <form onSubmit={loginUser}>
        <label htmlFor="">Email</label>
        <input
          type="email"
          placeholder="Email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          placeholder="Password"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
