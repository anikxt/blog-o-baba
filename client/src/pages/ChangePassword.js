import React, { useState } from 'react';
import axios from '../axios.config';
import { useNavigate } from 'react-router-dom';

function ChangePassword() {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  let navigate = useNavigate();

  const changePassword = () => {
    axios
      .put(
        '/auth/changepassword',
        {
          oldPassword: oldPassword,
          newPassword: newPassword,
        },
        {
          headers: {
            accessToken: localStorage.getItem('accessToken'),
          },
        }
      )
      .then((response) => {
        if (response.data.error) {
          alert(response.data.error);
        }
        navigate('/login');
      });
  };

  return (
    <div>
      <h1>Change Your Password</h1>
      <input
        type="text"
        placeholder="Old Password..."
        onChange={(event) => {
          setOldPassword(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="New Password..."
        onChange={(event) => {
          setNewPassword(event.target.value);
        }}
      />
      <button onClick={changePassword}>Save Changes</button>
    </div>
  );
}

export default ChangePassword;
