import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Register from './RegisterModal';
import { FiCrosshair, FiX } from 'react-icons/fi';
function LoginModal({ isOpen, onClose }) {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: '',
    password: ''
  });

  const [currentTab, setCurrentTab] = useState(0);

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
    } catch (error) {
      console.error(error);
    }
  };

  const [modalClose, setModalClose] = useState(false);
  const [formDataValid, setFormDataValid] = useState({
    email: false,
    password: false
  });

  const handleEmailInput = (e) => {
    const emailValue = e.target.value;
    setData({ ...data, email: emailValue });

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(emailValue);

    setFormDataValid({ ...formDataValid, email: isValidEmail });
  };

  const changeTab = () => setCurrentTab(0);
  if (!isOpen) {
    return null;
  }

  return (
    <>
      {isOpen && currentTab === 0 && (
        <div className="fixed grid h-screen w-screen place-items-center bg-black/75">
          <form
            onSubmit={loginUser}
            className="relative flex w-full max-w-96 flex-col rounded-md border border-neutral-700 bg-neutral-950 p-5"
          >
            <div className=" ">
              <div className="text-3xl font-bold">Okaeri!</div>
              <div className="text-sm text-neutral-400">Login to your account</div>
            </div>
            <span className="my-2.5 border-b border-b-neutral-800"></span>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-1">
                <label htmlFor="" className="font-semibold">
                  Email
                </label>
                <input
                  type="email"
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
                Login
              </button>
            </div>
            <button
              onClick={onClose}
              className="absolute right-0 top-0 pr-2 pt-2 text-2xl text-neutral-500 transition-all duration-200 hover:text-neutral-50"
            >
              <FiX />
            </button>
            <div className="mt-3 text-center text-sm text-neutral-400">
              <span>Don't have an account? </span>
              <button
                className="font-semibold text-neutral-300 transition-all duration-200 hover:text-neutral-100"
                onClick={() => setCurrentTab(1)}
              >
                Register now
              </button>
            </div>
          </form>
        </div>
      )}
      {isOpen && currentTab === 1 && (
        <div>
          <Register onChangeTab={changeTab}></Register>
        </div>
      )}
    </>
  );
}

export default LoginModal;
