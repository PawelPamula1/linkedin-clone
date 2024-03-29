import { Avatar } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import background from './assets/img/background.jpg';
import { selectUser } from './features/userSlice';
import './Sidebar.css';

const Sidebar = () => {
  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src={background} alt="" />
        <Avatar className="sidebar__avatar" src={user.photoURL} />
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed your profile</p>
          <p className="sidebar__statNumber">360</p>
        </div>
        <div className="sidebar__stat">
          <p>Views of your posts</p>
          <p className="sidebar__statNumber">5,029</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem('reactjs')}
        {recentItem('programming')}
        {recentItem('software')}
        {recentItem('code')}
        {recentItem('UI/UX')}
      </div>
    </div>
  );
};

export default Sidebar;
