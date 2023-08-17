import { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://randomuser.me/api/?results=100')
      .then(response => {
        setUsers(response.data.results);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <div>
        {users.map((user, index) => (
          <div key={index}>
            <img src={user.picture.large} alt="User" />
            <p>Name: {user.name.first} {user.name.last}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
