import { Avatar } from '@mui/material';
import React from 'react';
import background from './assets/img/background.jpg';
import profile from './assets/img/profile_photo.jpg';
import './Sidebar.css';

const Sidebar = () => {
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
        <Avatar className="sidebar__avatar" src={profile} />
        <h2>Paweł Pamuła</h2>
        <h4>pawelpamula003@gmail.com</h4>
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
