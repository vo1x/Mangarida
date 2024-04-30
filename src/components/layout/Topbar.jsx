import { useNavigate, Link } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import Header from './Header';
import SearchBar from '../SearchBar';
import { UserContext } from '../../../context/userContext';
import LoginModal from '../modals/LoginModal';
import useAuth from '../../hooks/useAuth';

function Topbar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  return (
    <div
      className={`sticky top-0 z-50 w-full border-b border-neutral-900 bg-black shadow-md backdrop-blur-md`}
    >
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/75" onClick={() => setIsModalOpen(false)}></div>
      )}
      <div className="flex justify-between p-3 px-10">
        <Header />
        <div className="flex items-center gap-2">
          <SearchBar />
          {user ? (
            <div>
              <div onClick={handleLogout}>Logout</div>
              <div>{user.name}</div>
            </div>
          ) : (
            <button onClick={() => setIsModalOpen(true)}>Login</button>
          )}
        </div>
      </div>
      <LoginModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default Topbar;
