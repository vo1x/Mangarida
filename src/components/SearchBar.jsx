import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SearchBar() {
  const navigate = useNavigate();
  const handleClick = () => {
    if (inputValue === '') {
      toast.error('Please provide a keyword!', {
        theme: 'colored',
        autoClose: 2000,
        position: 'bottom-right'
      });
    } else {
      const keyword =
        inputValue.trim().split(' ').length > 0
          ? inputValue.trim().split(' ').join('+')
          : inputValue.trim();
      navigate(`/search/${keyword}`);
    }
  };

  const [inputValue, setInputValue] = useState('');
  const [inputActive, setInputActive] = useState(false);

  return (
    <div>
      <div
        className={
          'flex content-center justify-center ' +
          (inputActive ? 'rounded-md ring-2 ring-neutral-700' : '')
        }
      >
        <button
          onClick={handleClick}
          className=" rounded-l-md bg-neutral-900 p-2  font-bold text-white "
        >
          <FaSearch className={`text-neutral-400`}></FaSearch>
        </button>
        <input
          type="text"
          placeholder="Search manga"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleClick();
            }
          }}
          onFocus={() => setInputActive(true)}
          onBlur={() => setInputActive(false)}
          className="rounded-r-md bg-neutral-900 p-2 text-neutral-300 placeholder-neutral-500 outline-none"
        />
      </div>
    </div>
  );
}

export default SearchBar;
