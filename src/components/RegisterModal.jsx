import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FiX } from 'react-icons/fi';
function Register({ onChangeTab, onClose }) {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const registerUser = async (e) => {
    e.preventDefault();
    const { name, email, password } = data;
    try {
      const { data } = await axios.post('/register', {
        name,
        email,
        password
      });
      if (data.error) {
        console.log(data.error);
      } else {
        setData({});
        console.log('Register success');
        navigate('/');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const [formDataValid, setFormDataValid] = useState({
    email: false,
    password: false
  });

  const handleEmailInput = (e) => {
    var emailValue = e.target.value;
    setData({ ...data, email: emailValue });

    if (emailValue.trim().includes('@')) {
      setFormDataValid({ ...formDataValid, email: true });
    } else {
      setFormDataValid({ ...formDataValid, email: false });
    }
  };

  return (
    <div className="fixed grid h-screen w-screen place-items-center bg-black/75">
      <form
        onSubmit={registerUser}
        className="relative flex w-full max-w-96 flex-col rounded-md border border-neutral-700 bg-neutral-950 p-5"
      >
        <div className=" ">
          <div className="text-3xl font-bold">Create an account</div>
          <div className="text-sm text-neutral-400">Sign up to access more features</div>
        </div>
        <span className="my-2.5 border-b border-b-neutral-800"></span>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="font-semibold">
              Username
            </label>
            <input
              type="text"
              placeholder="sui"
              className={`rounded-md border border-neutral-700   bg-neutral-950 p-2 outline-none placeholder:text-neutral-500 focus:border-neutral-50`}
              value={data.name}
              required
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="font-semibold">
              Email
            </label>
            <input
              type="email"
              required
              placeholder="kawaii@example.com"
              className={`rounded-md border border-neutral-700   bg-neutral-950 p-2 outline-none placeholder:text-neutral-500 ${formDataValid.email ? 'focus:border-green-400' : 'focus:border-red-400'}`}
              value={data.email}
              onChange={handleEmailInput}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="" className="font-semibold">
              Password
            </label>
            <input
              type="password"
              required
              placeholder="Password"
              className="rounded-md border border-neutral-700   bg-neutral-950 p-2 outline-none placeholder:text-neutral-500 focus:border-neutral-50"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
          </div>

          <button
            type="submit"
            className="mt-2 rounded-md bg-neutral-50 py-2 font-semibold text-neutral-950 outline-none"
          >
            Create Account
          </button>
        </div>
        <button
          onClick={onClose}
          className="absolute right-0 top-0 pr-2 pt-2 text-2xl text-neutral-500 transition-all duration-200 hover:text-neutral-50"
        >
          <FiX />
        </button>
        <div className="mt-3 text-center text-sm text-neutral-400">
          <span>Already have an account? </span>
          <button
            className="font-semibold text-neutral-300 transition-all duration-200 hover:text-neutral-100"
            onClick={onChangeTab}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
