import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Reader from './pages/Reader';
import MangaDetails from './pages/MangaDetails';
import SearchResults from './pages/SearchResults';
import Home from './pages/Home';
import { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Login from './pages/Login';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { UserContextProvider } from '../context/userContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import axios from 'axios';
// import { ToastContainer } from 'react-toastify';
import Dashboard from './pages/Dashboard';
// import RequireAuth from './components/RequireAuth';
axios.defaults.baseURL = 'http://localhost:5000';
axios.defaults.withCredentials = true;
const queryClient = new QueryClient();
// import PrivateRoute from './components/RequireAuth';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} position="bottom" />
      <UserContextProvider>
        <SkeletonTheme baseColor="#111" highlightColor="#222">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/manga/:mangaName/:mangaID" element={<MangaDetails />} />
              <Route path="/read/:mangaName/:mangaID/:chapter" element={<Reader />}></Route>
              <Route path="/search/:keyword" element={<SearchResults />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/user/profile" element={<Dashboard />} />
            </Routes>
          </BrowserRouter>
        </SkeletonTheme>
      </UserContextProvider>
    </QueryClientProvider>
  );
}

export default App;
