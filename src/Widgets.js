import React from 'react';
import './Widgets.css';
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const Widgets = () => {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle('My next clone of big company', 'Linkedin clone this time')}
      {newsArticle('Politics', 'Putin Sends Message to West as His Troops Turn Kazakh Tide')}
      {newsArticle('Markets', 'Wall Street Hails the Great Stock Rotation (Just Like Last Year)')}
      {newsArticle('Crypto', 'These Four Charts Show Some of Bitcoin’s Potential Trouble Spots')}
      {newsArticle('Crypto', 'These Four Charts Show Some of Bitcoin’s Potential Trouble Spots')}
      {newsArticle('Opinion', 'Europe to Russia: Invade Ukraine, and We All Join NATO')}
    </div>
  );
};

export default Widgets;
