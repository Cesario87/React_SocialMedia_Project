import { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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
        <input
          type="text"
          placeholder="Search users..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        {users
          .filter(user =>
            user.name.first.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.name.last.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((user, index) => (
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
