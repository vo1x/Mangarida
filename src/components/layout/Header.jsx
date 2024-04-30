import { Link } from 'react-router-dom';

function Header() {
  return (
    <Link to="/">
      <h1 className="text-3xl font-bold text-slate-100">Mangarida</h1>
    </Link>
  );
}

export default Header;
