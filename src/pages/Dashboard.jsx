import useAuth from '../hooks/useAuth';
import Topbar from '../components/layout/Topbar';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Unauthorized from './401Unauthorized';
function Dashboard() {
  const { user } = useAuth();
  const handleClick = async () => {
    const { data } = await axios.post('/user/bookmarks/add', {
      user: user,
      mangaID: '123456',
      status: 'reading'
    });
    if (data.error) {
      console.log(data.error);
    } else {
      console.log(data.message);
    }
  };

  return (
    <>
      <Topbar></Topbar>

      {user ? (
        <>
          <div>
            <div>
              {user.name}
              {user.email}
              {user.bookmarks.length > 0
                ? user.bookmarks.map((mark) => (
                    <div>
                      {mark.status}
                      {mark.mangaID}
                    </div>
                  ))
                : 'No bookmarks'}
            </div>
            <button onClick={handleClick}>Add bookmark</button>
          </div>
        </>
      ) : (
        'Loading....'
      )}
    </>
  );
}

export default Dashboard;
